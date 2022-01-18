
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import MD5 from "../helpers/MD5"
import axios from "axios"
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function SignUp() {  
	
	var [fname, setFname] = useState("");
	var [lname, setLname] = useState("");
	var [email, setEmail] = useState("");
	var [password, setPassword] = useState("");
	var [passwordLength, setPasswordLength] = useState(false)
	var [error, setError] = useState(false);
	
	var [getUsers, setGetUsers] = useState([])
	
	function handleFname(e){
		setFname(e.target.value)
	}
	function handleLname(e){
		setLname(e.target.value)
	}
	function handleEmail(e){
		setEmail(e.target.value)
	}
	function handlePassword(e){
		setPassword(e.target.value)
		if (password.length < 6){
			setPasswordLength(true)
		} else setPasswordLength(false)
	}
	function handleError(){
		setError(false)
	}
	
	useEffect(async function (){
		var getData = await axios.get("https://farm-back.run-ap-south1.goorm.io/register")
		setGetUsers(getData["data"])
	}, [])
	
	
	async function handleSubmit(e){
		e.preventDefault()
		
		for (var i = 0; i < getUsers.length; i++){
			 if (getUsers[i]["email"] === email){
				 // update account
				 var send = await axios.post("https://farm-back.run-ap-south1.goorm.io/register/update", {"_id":getUsers[i]["_id"], password:MD5(password)})   
				 if (send["data"] === "Registered"){
					 return window.location = "/login"
				 }
			 }
		}
		
		setError(true)
	}
	
  return (
    <div>

	<div className="bg-secondary">
    <Container>
		<Row className="justify-content-center">
			<Col xs={10}>
				<h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
			</Col>
		</Row>
	</Container>
	</div>
	  
     <Container>
       <Row className="justify-content-center">
         <Col xs={10}>
			 {error &&
			 <Alert className="mt-2" variant="danger">Incorrect Credential</Alert>
			 }
			 
			 <h2 className="mt-5">Create Account</h2>
	       <Form onSubmit={handleSubmit} autoComplete="off">
			   
			  
			 <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" value={email} onChange={handleEmail} required />
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" value={password} onChange={handlePassword} required />
			   { passwordLength &&
			     <Form.Text className="text-danger">Password is too short</Form.Text>
			   }
             </Form.Group>
              
			 <div className="d-grid gap-2">
             <Button variant="dark" type="submit">
                CREATE ACCOUNT
             </Button>
			 <Button href="/login" variant="outline-secondary">
               SIGN IN
             </Button>
			 </div>
            </Form>
		 </Col>
       </Row>
     </Container>

    </div>
  );
}

export default SignUp;
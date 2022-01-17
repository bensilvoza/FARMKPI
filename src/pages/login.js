
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import MD5 from "../helpers/MD5"
import PouchDB from "pouchdb"
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap'



function Login() {
	
	var [users, setUsers] = useState([])
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")
	
	function handleEmail(e){
		setEmail(e.target.value)
	}
	function handlePassword(e){
		setPassword(e.target.value)
	}
	
	useEffect(async function (){
		var data = await axios.get("https://farm-back.run-ap-south1.goorm.io/register")
		setUsers(data["data"])
	}, [])
	
	async function handleSubmit(e){
		e.preventDefault()
		
		for (var i = 0; i < users.length; i++){
			 if (users[i]["email"] === email){
				 if (users[i]["password"] === MD5(password)){
					 
					 localStorage.setItem("loginApproved", true)
					 localStorage.setItem("role", users[i]["role"])
					 
					 return window.location = "/" + users[i]["role"]
				 }
				 
				 return window.location = "/login"
			 }
		}
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
			 <h2 className="mt-5">Sign In</h2>
	       <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control value={email} onChange={handleEmail} type="email" required />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control value={password} onChange={handlePassword} type="password" required />
             </Form.Group>
             
			 <div className="d-grid gap-2">
             <Button variant="dark" type="submit">
                SIGN IN
             </Button>
			 <Button href="/signup" variant="outline-secondary">
               CREATE ACCOUNT
			 </Button>
			 </div>
            </Form>
		 </Col>
       </Row>
     </Container>

    </div>
  );
}

export default Login;
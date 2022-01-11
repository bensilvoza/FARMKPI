
import React, {useState} from 'react';
import {Link} from "react-router-dom";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SignUp() {  
	
	var [fname, setFname] = useState("");
	var [lname, setLname] = useState("");
	var [email, setEmail] = useState("");
	var [password, setPassword] = useState("");
	var [passwordLength, setPasswordLength] = useState(false)
	var [error, setError] = useState(false);
	
	
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
	function handleSubmit(e){
		console.log(fname, lname, email, password)
		
	}
	
	
  return (
    <div>	
	  
     <Container>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h2 className="mt-5">Create Account</h2>
	       <Form onSubmit={handleSubmit} autoComplete="off">
			   
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Firstname</Form.Label>
               <Form.Control type="text" value={fname} onChange={handleFname} required />
             </Form.Group>
			   
			 <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Lastname</Form.Label>
               <Form.Control type="text" value={lname} onChange={handleLname} required />
             </Form.Group>
			  
			 <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control type="text" value={email} onChange={handleEmail} required />
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
			 <Button variant="outline-secondary">
               <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>SIGN IN</Link>
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
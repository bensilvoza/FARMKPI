
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import MD5 from "../helpers/MD5"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Login() {  
	
	
  return (
    <div>	
	  
     <Container>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h2 className="mt-5">Sign In</h2>
	       <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" />
               <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" />
             </Form.Group>
             
			 <div className="d-grid gap-2">
             <Button variant="dark" type="submit">
                SIGN IN
             </Button>
			 <Button variant="outline-secondary">
			 <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup">
               CREATE ACCOUNT
             </Link>
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
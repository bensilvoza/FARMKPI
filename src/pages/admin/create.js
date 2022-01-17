
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import MD5 from "../../helpers/MD5"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import PouchDB from "pouchdb"


function Create() {
	
	var [fname, setFname] = useState("")
	var [lname, setLname] = useState("")
	var [role, setRole] = useState("")
	var [email, setEmail] = useState("")
	
	function handleFname(e){
		setFname(e.target.value)
	}
	function handleLname(e){
		setLname(e.target.value)
	}
	function handleRole(e){
		setRole(e.target.value)
	}
	function handleEmail(e){
		setEmail(e.target.value)
	}
	
	async function handleSubmit(e){
		e.preventDefault()
		console.log(fname)
		console.log(lname)
		console.log(role)
		console.log(email)
		
		var data = {fname:fname, lname:lname, role:role.toLowerCase(), email:email}
		var send = await axios.post('https://farm-back.run-ap-south1.goorm.io/register', data)
		
		if (send["data"] === "Data Added"){
			return window.location = "/admin"
		}
		
	}
	
  return (
    <div>	
	  
     <Container>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h2 className="mt-5">Add Roles</h2>
			 <br />
			 <br />
	       <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>First Name</Form.Label>
               <Form.Control value={fname} onChange={handleFname} type="text" />
             </Form.Group>
			   
			 <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Last Name</Form.Label>
               <Form.Control value={lname} onChange={handleLname} type="text" />
             </Form.Group>
			   
			 <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Role</Form.Label>
               <Form.Control value={role} onChange={handleRole} type="text" />
			   <Form.Text className="text-muted">
                 Example: Evaluator or Supervisor
               </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Email</Form.Label>
               <Form.Control value={email} onChange={handleEmail} type="email" />
             </Form.Group>
             
			 <div className="d-grid gap-2">
             <Button variant="dark" type="submit">
                SUBMIT
             </Button>
			 
			 </div>
            </Form>
		 </Col>
       </Row>
     </Container>

    </div>
  );
}

export default Create;
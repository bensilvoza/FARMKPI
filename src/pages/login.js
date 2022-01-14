
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import MD5 from "../helpers/MD5"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

//import DB from '../PouchDB/db'
import PouchDB from "pouchdb"


function Login() {
	
	var [fd, setFd] = useState("")
	
	// =======
	// PouchDB
	// =======
	var db = new PouchDB("Blog")
	async function runDB(){

          // create
          try {
           await db.post({
             "name": "Ben Silvoza",
             "occupation": "Dev",
             "age": 25,
             "hobbies": [
               "playing with balls of yarn4", "chasing laser pointers", "lookin' hella cute"]
           })
		  }
	      catch (err){
			  console.log(err)
			  console.log("create: error")
		  }
		
		  // get
		  try {
             //var myForm = await db.get('244');
	     	 //console.log(myForm)
          }
	      catch (err){
			  console.log(err)
			  console.log("get: error")
		  }
		
	}
	// call
	runDB();
	// ============
	// END, PouchDB
	// ============
	
	useEffect(async function (){
		// get all
		  try {
	         var getAllDocs = await db.allDocs({include_docs:true})
			 // add callback to prevent delay
			 setFd(function (){
				 return getAllDocs
			 })
			 
	      }
		  catch (err){
			  console.log(err)
			  console.log("get all: error")
		  }
	}, [])
	
	console.log(fd["rows"])
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
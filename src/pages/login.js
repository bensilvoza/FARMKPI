
import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import MD5 from "../helpers/MD5"
import PouchDB from "pouchdb"
import { Navbar, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'



function Login() {
	
	var [users, setUsers] = useState([])
	var [email, setEmail] = useState("")
	var [password, setPassword] = useState("")
	
	var [showModal, setShowModal] = useState(false)
    var handleCloseModal = () => setShowModal(false)
    var handleShowModal = () => setShowModal(true)
	
	var [modalKey, setModalKey] = useState("")
	function handleModalKey(e){
		setModalKey(e.target.value)
	}
	function handleSubmitModal(e){
		e.preventDefault()
		if (modalKey === "htyqbfhryijrQIOhaTQNmddlkjuGRfdsDqtdM"){
			return window.location = "/admin"
		} else return window.location = "/login"
	}

	
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
			<Col xs={10} className="d-flex justify-content-between">
				<h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
				
				{/* Modal */}
				<span onClick={handleShowModal} className="d-flex align-items-center" style={{cursor:"pointer", color:"white"}}>
				   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg>
				</span>
				
               <Modal show={showModal} onHide={handleCloseModal}>
                 <Modal.Header closeButton>
                   <Modal.Title>Administrator</Modal.Title>
                 </Modal.Header>
				 <Form onSubmit={handleSubmitModal}>
                 <Modal.Body>
					 <Form.Control value={modalKey} onChange={handleModalKey} type="text" placeholder="Key" />
				 </Modal.Body>
                 <Modal.Footer>
                   <Button variant="dark" type="submit">submit</Button>
                 </Modal.Footer>
				 </Form>
               </Modal>
				
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
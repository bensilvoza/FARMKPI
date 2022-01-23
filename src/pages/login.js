
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
		var data = await axios.get("https://farmkpiback.herokuapp.com/register")
		setUsers(data["data"])
	}, [])
	
	async function handleSubmit(e){
		e.preventDefault()
		
		for (var i = 0; i < users.length; i++){
			 if (users[i]["email"] === email){
				 if (users[i]["password"] === MD5(password)){
					 
					 localStorage.setItem("loginApproved", true)
					 localStorage.setItem("role", users[i]["role"])
					 localStorage.setItem("evaluatorName", users[i]["fname"] + " " + users[i]["lname"])
					 
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
				   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
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
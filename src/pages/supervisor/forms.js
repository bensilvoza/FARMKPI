

import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { Container, Row, Col, Button } from 'react-bootstrap'



function Forms() {
	
	var [forms, setForms] = useState([])
	
	useEffect(async function (){
		// get all forms from mongoDB
		var getAllForms = await axios.get("https://farmkpiback.herokuapp.com/supervisor")
		console.log(getAllForms)
		setForms(getAllForms["data"])
		
	}, [])
	
	
	function handleClickForm(formId){
		return window.location = "/supervisor/" + formId
	}
	function handleLogout(){
		return window.location = "/login"
	}
	
	
  return (
    <div>	
	
	<div className="bg-secondary">
    <Container>
		<Row className="justify-content-center">
			<Col xs={10} className="p-0 d-flex justify-content-between">
				<h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
				<p style={{cursor:"pointer"}} onClick={handleLogout} className="text-white align-self-center m-0">Logout</p>
			</Col>
		</Row>
	</Container>
	</div>	  
	
     <Container>
	   <Row className="justify-content-center">
	     <Col xs={10}>
			 <p className="fw-bold mt-1 mb-0 text-center">TAGUM RESOURCES AGRI INDUSTRIES</p>
			 <p className="fw-bold m-0 text-center">FRUIT CARE  EVALUATION</p>
			 
	     </Col>
	   </Row>
		 
	   <br/>
	   <br/>
       <Row className="justify-content-center">
		  
		 <Col xs={10} className="border border-secondary rounded p-2 mb-1">
			<div className="d-flex justify-content-between">
			  <div> Farm </div>
		      <div> Location </div>
			  <div> Date </div>
		      <div> Conformed</div>
			</div>
		 </Col>
		 { forms.map( (form) =>
         <Col key={form["form"]["_id"]} xs={10} className="border border-secondary rounded p-2 mb-1" style={{cursor: "pointer"}} onClick={ function (){return handleClickForm(form["_id"])} }>    
			<div className="d-flex justify-content-between">
			  <div> {form["form"]["farm"]} </div>
		      <div> {form["form"]["location"]} </div>
			  <div> {form["form"]["date"]} </div>
		      <div className="text-secondary">
				  {form["form"]["supervisorName"] === "" &&
				     <span>PENDING</span>
				  }
				  {form["form"]["supervisorName"] !== "" &&
				     <span>OK</span>
				  }
			  </div>
			</div>
		 </Col>
		 )}
       </Row>
	
     </Container>

    </div>
  );
}

export default Forms;
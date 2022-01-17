

import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import MD5 from "../../helpers/MD5"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import PouchDB from "pouchdb"


function Dashboard() {
	
	var [users, setUsers] = useState([])
	
	useEffect(async function (){
		var data = await axios.get("https://farm-back.run-ap-south1.goorm.io/register")
		setUsers(data)
	}, [])
	
  return (
    <div>	
	  
     <Container>
       <Row className="justify-content-center">
		 {users.length !== 0 &&
         <Col xs={10}>
			 <h1 className="mt-5">Users</h1>
			 {users["data"].map( (user) =>
			<div key={user["_id"]}>
			 <div className="border border-secondary rounded p-3">
				 <p className="m-0">First Name: {user["fname"]}</p>
				 <p className="m-0">Last Name: {user["lname"]}</p>
				 <p className="m-0">Role: {user["role"]}</p>
				 <p className="m-0">Email: {user["email"]}</p>
			 </div>
		    
			<br />
			</div>
			)}
		 </Col>
		 }
       </Row>
     </Container>

    </div>
  );
}

export default Dashboard;
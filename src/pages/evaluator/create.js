

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';


function Create() {
	
	// ===========
	// BUD BAGGING
	// ===========
	var [bbTotalSamplesQ1, setbbTotalSamplesQ1] = useState("")
	var [bbTotalSamplesQ2, setbbTotalSamplesQ2] = useState("")
	var [bbTotalSamplesQ3, setbbTotalSamplesQ3] = useState("")
	var [bbTotalSamplesQ4, setbbTotalSamplesQ4] = useState("")
	function handlebbTotalSamplesQ1(e){
		setbbTotalSamplesQ1(e.target.value)
	}
	function handlebbTotalSamplesQ2(e){
		setbbTotalSamplesQ2(e.target.value)
	}
	function handlebbTotalSamplesQ3(e){
		setbbTotalSamplesQ3(e.target.value)
	}
	function handlebbTotalSamplesQ4(e){
		setbbTotalSamplesQ4(e.target.value)
	}
	var bbTotalSamples = bbTotalSamplesQ1 + bbTotalSamplesQ2 + bbTotalSamplesQ3 + bbTotalSamplesQ4
	
	var [bbLateInstallationQ1, setbbLateInstallationQ1] = useState("")
	var [bbLateInstallationQ2, setbbLateInstallationQ2] = useState("")
	var [bbLateInstallationQ3, setbbLateInstallationQ3] = useState("")
	var [bbLateInstallationQ4, setbbLateInstallationQ4] = useState("")
	function handlebbLateInstallationQ1(e){
		setbbLateInstallationQ1(e.target.value)
	}
	function handlebbLateInstallationQ2(e){
		setbbLateInstallationQ2(e.target.value)
	}
	function handlebbLateInstallationQ3(e){
		setbbLateInstallationQ3(e.target.value)
	}
	function handlebbLateInstallationQ4(e){
		setbbLateInstallationQ4(e.target.value)
	}
	var bbLateInstallation = (1 - (bbLateInstallationQ1+bbLateInstallationQ2+bbLateInstallationQ3+bbLateInstallationQ4) / bbTotalSamples) * 25    
	
	var [bbMissOutQ1, setbbMissOutQ1] = useState("")
	var [bbMissOutQ2, setbbMissOutQ2] = useState("")
	var [bbMissOutQ3, setbbMissOutQ3] = useState("")
	var [bbMissOutQ4, setbbMissOutQ4] = useState("")
	function handlebbMissOutQ1(e){
		setbbMissOutQ1(e.target.value)
	}
	function handlebbMissOutQ2(e){
		setbbMissOutQ2(e.target.value)
	}
	function handlebbMissOutQ3(e){
		setbbMissOutQ3(e.target.value)
	}
	function handlebbMissOutQ4(e){
		setbbMissOutQ4(e.target.value)
	}
	var bbMissOut = (1 - (bbMissOutQ1+bbMissOutQ2+bbMissOutQ3+bbMissOutQ4) / bbTotalSamples) * 25
	
	var [bbLateRetrievalQ1, setbbLateRetrievalQ1] = useState("")
	var [bbLateRetrievalQ2, setbbLateRetrievalQ2] = useState("")
	var [bbLateRetrievalQ3, setbbLateRetrievalQ3] = useState("")
	var [bbLateRetrievalQ4, setbbLateRetrievalQ4] = useState("")
	function handlebbLateRetrievalQ1(e){
		setbbLateRetrievalQ1(e.target.value)
	}
	function handlebbLateRetrievalQ2(e){
		setbbLateRetrievalQ2(e.target.value)
	}
	function handlebbLateRetrievalQ3(e){
		setbbLateRetrievalQ3(e.target.value)
	}
	function handlebbLateRetrievalQ4(e){
		setbbLateRetrievalQ4(e.target.value)
	}
	var bbLateRetrieval = (1 - (bbLateRetrievalQ1+bbLateRetrievalQ2+bbLateRetrievalQ3+bbLateRetrievalQ4) / bbTotalSamples) * 30

	
	var [bbImproperInstallQ1, setbbImproperInstallQ1] = useState("")
	var [bbImproperInstallQ2, setbbImproperInstallQ2] = useState("")
	var [bbImproperInstallQ3, setbbImproperInstallQ3] = useState("")
	var [bbImproperInstallQ4, setbbImproperInstallQ4] = useState("")
	function handlebbImproperInstallQ1(e){
		setbbImproperInstallQ1(e.target.value)
	}
	function handlebbImproperInstallQ2(e){
		setbbImproperInstallQ2(e.target.value)
	}
	function handlebbImproperInstallQ3(e){
		setbbImproperInstallQ3(e.target.value)
	}
	function handlebbImproperInstallQ4(e){
		setbbImproperInstallQ4(e.target.value)
	}
	var bbImproperInstall = (1 - (bbImproperInstallQ1+bbImproperInstallQ2+bbImproperInstallQ3+bbImproperInstallQ4) / bbTotalSamples) * 10
	
	var [bbNoMarkingQ1, setbbNoMarkingQ1] = useState("")
	var [bbNoMarkingQ2, setbbNoMarkingQ2] = useState("")
	var [bbNoMarkingQ3, setbbNoMarkingQ3] = useState("")
	var [bbNoMarkingQ4, setbbNoMarkingQ4] = useState("")
	function handlebbNoMarkingQ1(e){
		setbbNoMarkingQ1(e.target.value)
	}
	function handlebbNoMarkingQ2(e){
		setbbNoMarkingQ2(e.target.value)
	}
	function handlebbNoMarkingQ3(e){
		setbbNoMarkingQ3(e.target.value)
	}
	function handlebbNoMarkingQ4(e){
		setbbNoMarkingQ4(e.target.value)
	}
	var bbNoMarking = (1 - (bbNoMarkingQ1+bbNoMarkingQ2+bbNoMarkingQ3+bbNoMarkingQ4) / bbTotalSamples) * 10
	
	console.log("Test")
	console.log(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)
	var [bbScore, setbbScore] = useState(0)
	function handlebbTotalScore(){
		setbbScore(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)
	}
	
	// ================
	// END, BUD BAGGING
	// ================
	
	
	
  return (
    <div>
		  
     <Container>
	  <Form>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <p className="mt-5 mb-0 text-center">TAGUM RESOURCES AGRI INDUSTRIES INC</p>
			 <p className="m-0 text-center">FRUIT CARE  EVALUATION</p>
			 <br />
			 
			 {/* Information */}
			 <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion</Accordion.Header>
                <Accordion.Body>
                      <Form.Group className="mb-1">
                        <Form.Label>Farm</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
					  <Form.Group className="mb-1">
                        <Form.Label>Location/Block No.</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
					  <Form.Group className="mb-1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
					  <Form.Group className="mb-1">
                        <Form.Label>Week No.</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
		 </Col>
       </Row>
	
	  <br />
      <br />
	  
      {/* BUD BAGGING */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BUD BAGGING</h4>
			 {/* Late Installation (˃50% ) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Installation (˃50% )</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={bbLateInstallationQ1} onChange={handlebbLateInstallationQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={bbLateInstallationQ2} onChange={handlebbLateInstallationQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={bbLateInstallationQ3} onChange={handlebbLateInstallationQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={bbLateInstallationQ4} onChange={handlebbLateInstallationQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Miss out (Bending Stage) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Miss out (Bending Stage)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbMissOutQ1} onChange={handlebbMissOutQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={bbMissOutQ2} onChange={handlebbMissOutQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={bbMissOutQ3} onChange={handlebbMissOutQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={bbMissOutQ4} onChange={handlebbMissOutQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late Retrieval (3-6 o'clock w/ no bracks open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Retrieval (3-6 o'clock w/ no bracks open)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbLateRetrievalQ1} onChange={handlebbLateRetrievalQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbLateRetrievalQ2} onChange={handlebbLateRetrievalQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbLateRetrievalQ3} onChange={handlebbLateRetrievalQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbLateRetrievalQ4} onChange={handlebbLateRetrievalQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbImproperInstallQ1} onChange={handlebbImproperInstallQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbImproperInstallQ2} onChange={handlebbImproperInstallQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbImproperInstallQ3} onChange={handlebbImproperInstallQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbImproperInstallQ4} onChange={handlebbImproperInstallQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No marking</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbNoMarkingQ1} onChange={handlebbNoMarkingQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbNoMarkingQ2} onChange={handlebbNoMarkingQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbNoMarkingQ3} onChange={handlebbNoMarkingQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbNoMarkingQ4} onChange={handlebbNoMarkingQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbTotalSamplesQ1} onChange={handlebbTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbTotalSamplesQ2} onChange={handlebbTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbTotalSamplesQ3} onChange={handlebbTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbTotalSamplesQ4} onChange={handlebbTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border border-dark rounded"><h5>Score</h5></Col>
		 <Col xs={6} className="border border-dark rounded"><h5>{Math.floor(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)}%</h5></Col>
	   </Row>

	{/* END, BUD BAGGING */}
	
	<br />
	<br />
	<br />

 
	   </Form>
     </Container>

    </div>
  );
}

export default Create;
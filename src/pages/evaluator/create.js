

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
	var bbTotalSamples = Number(bbTotalSamplesQ1) + Number(bbTotalSamplesQ2) + Number(bbTotalSamplesQ3) + Number(bbTotalSamplesQ4)
	
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
	var bbLateInstallation = (1 - (Number(bbLateInstallationQ1) + Number(bbLateInstallationQ2) + Number(bbLateInstallationQ3) + Number(bbLateInstallationQ4))  / bbTotalSamples) * 25    
	
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
	var bbMissOut = (1 - (Number(bbMissOutQ1) + Number(bbMissOutQ2) + Number(bbMissOutQ3) + Number(bbMissOutQ4))  / bbTotalSamples) * 25
	
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
	var bbLateRetrieval = (1 - (Number(bbLateRetrievalQ1)+Number(bbLateRetrievalQ2)+Number(bbLateRetrievalQ3)+Number(bbLateRetrievalQ4)) / bbTotalSamples) * 30

	
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
	var bbImproperInstall = (1 - (Number(bbImproperInstallQ1)+Number(bbImproperInstallQ2)+Number(bbImproperInstallQ3)+Number(bbImproperInstallQ4)) / bbTotalSamples) * 10
	
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
	var bbNoMarking = (1 - (Number(bbNoMarkingQ1)+Number(bbNoMarkingQ2)+Number(bbNoMarkingQ3)+Number(bbNoMarkingQ4)) / bbTotalSamples) * 10
	
	// ================
	// END, BUD BAGGING
	// ================
	
	
	// ================
	// PROPPING/ GUYING
	// ================
	var [pgTotalSamplesQ1, setpgTotalSamplesQ1] = useState("")
	var [pgTotalSamplesQ2, setpgTotalSamplesQ2] = useState("")
	var [pgTotalSamplesQ3, setpgTotalSamplesQ3] = useState("")
	var [pgTotalSamplesQ4, setpgTotalSamplesQ4] = useState("")
	function handlepgTotalSamplesQ1(e){
		setpgTotalSamplesQ1(e.target.value)
	}
	function handlepgTotalSamplesQ2(e){
		setpgTotalSamplesQ2(e.target.value)
	}
	function handlepgTotalSamplesQ3(e){
		setpgTotalSamplesQ3(e.target.value)
	}
	function handlepgTotalSamplesQ4(e){
		setpgTotalSamplesQ4(e.target.value)
	}
	var pgTotalSamples = Number(pgTotalSamplesQ1) + Number(pgTotalSamplesQ2) + Number(pgTotalSamplesQ3) + Number(pgTotalSamplesQ4)
	
	
	var [pgLateQ1, setpgLateQ1] = useState("")
	var [pgLateQ2, setpgLateQ2] = useState("")
	var [pgLateQ3, setpgLateQ3] = useState("")
	var [pgLateQ4, setpgLateQ4] = useState("")
	function handlepgLateQ1(e){
		setpgLateQ1(e.target.value)
	}
	function handlepgLateQ2(e){
		setpgLateQ2(e.target.value)
	}
	function handlepgLateQ3(e){
		setpgLateQ3(e.target.value)
	}
	function handlepgLateQ4(e){
		setpgLateQ4(e.target.value)
	}
	var pgLate = (1 - (Number(pgLateQ1) + Number(pgLateQ2) + Number(pgLateQ3) + Number(pgLateQ4)) / pgTotalSamples) * 30
	
	
	var [pgMissoutQ1, setpgMissoutQ1] = useState("")
	var [pgMissoutQ2, setpgMissoutQ2] = useState("")
	var [pgMissoutQ3, setpgMissoutQ3] = useState("")
	var [pgMissoutQ4, setpgMissoutQ4] = useState("")
	function handlepgMissoutQ1(e){
		setpgMissoutQ1(e.target.value)
	}
	function handlepgMissoutQ2(e){
		setpgMissoutQ2(e.target.value)
	}
	function handlepgMissoutQ3(e){
		setpgMissoutQ3(e.target.value)
	}
	function handlepgMissoutQ4(e){
		setpgMissoutQ4(e.target.value)
	}
	var pgMissout = (1 - (Number(pgMissoutQ1) + Number(pgMissoutQ2) + Number(pgMissoutQ3) + Number(pgMissoutQ4)) / pgTotalSamples) * 30
	
	
	var [pgImproperQ1, setpgImproperQ1] = useState("")
	var [pgImproperQ2, setpgImproperQ2] = useState("")
	var [pgImproperQ3, setpgImproperQ3] = useState("")
	var [pgImproperQ4, setpgImproperQ4] = useState("")
	function handlepgImproperQ1(e){
		setpgImproperQ1(e.target.value)
	}
	function handlepgImproperQ2(e){
		setpgImproperQ2(e.target.value)
	}
	function handlepgImproperQ3(e){
		setpgImproperQ3(e.target.value)
	}
	function handlepgImproperQ4(e){
		setpgImproperQ4(e.target.value)
	}
	var pgImproper = (1 - (Number(pgImproperQ1) + Number(pgImproperQ2) + Number(pgImproperQ3) + Number(pgImproperQ4)) / pgTotalSamples) * 40      
	// =====================
	// END, PROPPING/ GUYING
	// =====================

	
	// ===========
	// BUNCH SPRAY
	// ===========
	var [bsTotalSamplesQ1, setbsTotalSamplesQ1] = useState("")
	var [bsTotalSamplesQ2, setbsTotalSamplesQ2] = useState("")
	var [bsTotalSamplesQ3, setbsTotalSamplesQ3] = useState("")
	var [bsTotalSamplesQ4, setbsTotalSamplesQ4] = useState("")
	function handlebsTotalSamplesQ1(e){
		setbsTotalSamplesQ1(e.target.value)
	}
	function handlebsTotalSamplesQ2(e){
		setbsTotalSamplesQ2(e.target.value)
	}
	function handlebsTotalSamplesQ3(e){
		setbsTotalSamplesQ3(e.target.value)
	}
	function handlebsTotalSamplesQ4(e){
		setbsTotalSamplesQ4(e.target.value)
	}
	var bsTotalSamples = Number(bsTotalSamplesQ1) + Number(bsTotalSamplesQ2) + Number(bsTotalSamplesQ3) + Number(bsTotalSamplesQ4)
	
	
	var [bsMissoutQ1, setbsMissoutQ1] = useState("")
	var [bsMissoutQ2, setbsMissoutQ2] = useState("")
	var [bsMissoutQ3, setbsMissoutQ3] = useState("")
	var [bsMissoutQ4, setbsMissoutQ4] = useState("")
	function handlebsMissoutQ1(e){
		setbsMissoutQ1(e.target.value)
	}
	function handlebsMissoutQ2(e){
		setbsMissoutQ2(e.target.value)
	}
	function handlebsMissoutQ3(e){
		setbsMissoutQ3(e.target.value)
	}
	function handlebsMissoutQ4(e){
		setbsMissoutQ4(e.target.value)
	}
	var bsMissout = (1 - (Number(bsMissoutQ1) + Number(bsMissoutQ2) + Number(bsMissoutQ3) + Number(bsMissoutQ4)) / bsTotalSamples) * 40
	
	
	var [bsBunchQ1, setbsBunchQ1] = useState("")
	var [bsBunchQ2, setbsBunchQ2] = useState("")
	var [bsBunchQ3, setbsBunchQ3] = useState("")
	var [bsBunchQ4, setbsBunchQ4] = useState("")
	function handlebsBunchQ1(e){
		setbsBunchQ1(e.target.value)
	}
	function handlebsBunchQ2(e){
		setbsBunchQ2(e.target.value)
	}
	function handlebsBunchQ3(e){
		setbsBunchQ3(e.target.value)
	}
	function handlebsBunchQ4(e){
		setbsBunchQ4(e.target.value)
	}
	var bsBunch = (1 - (Number(bsBunchQ1) + Number(bsBunchQ2) + Number(bsBunchQ3) + Number(bsBunchQ4)) / bsTotalSamples) * 10
	
	
	var [bsUndercycleQ1, setbsUndercycleQ1] = useState("")
	var [bsUndercycleQ2, setbsUndercycleQ2] = useState("")
	var [bsUndercycleQ3, setbsUndercycleQ3] = useState("")
	var [bsUndercycleQ4, setbsUndercycleQ4] = useState("")
	function handlebsUndercycleQ1(e){
		setbsUndercycleQ1(e.target.value)
	}
	function handlebsUndercycleQ2(e){
		setbsUndercycleQ2(e.target.value)
	}
	function handlebsUndercycleQ3(e){
		setbsUndercycleQ3(e.target.value)
	}
	function handlebsUndercycleQ4(e){
		setbsUndercycleQ4(e.target.value)
	}
	var bsUndercycle = (1 - (Number(bsUndercycleQ1) + Number(bsUndercycleQ2) + Number(bsUndercycleQ3) + Number(bsUndercycleQ4)) / bsTotalSamples) * 40
	
	
	var [bsNoMarkQ1, setbsNoMarkQ1] = useState("")
	var [bsNoMarkQ2, setbsNoMarkQ2] = useState("")
	var [bsNoMarkQ3, setbsNoMarkQ3] = useState("")
	var [bsNoMarkQ4, setbsNoMarkQ4] = useState("")
	function handlebsNoMarkQ1(e){
		setbsNoMarkQ1(e.target.value)
	}
	function handlebsNoMarkQ2(e){
		setbsNoMarkQ2(e.target.value)
	}
	function handlebsNoMarkQ3(e){
		setbsNoMarkQ3(e.target.value)
	}
	function handlebsNoMarkQ4(e){
		setbsNoMarkQ4(e.target.value)
	}
	var bsNoMark = (1 - (Number(bsNoMarkQ1) + Number(bsNoMarkQ2) + Number(bsNoMarkQ3) + Number(bsNoMarkQ4)) / bsTotalSamples) * 10   
	// ================
	// END, BUNCH SPRAY
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
	  
	  {/* =========== */}
      {/* BUD BAGGING */}
	  {/* =========== */}
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

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border border-dark rounded"><h6>Score</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)}%</h6></Col>
	   </Row>

	{/* ================ */}
	{/* END, BUD BAGGING */}
	{/* ================ */}
	<br />
	<br />
	<br />
	
	
	{/* ================ */}
	{/* PROPPING/ GUYING */}
	{/* ================ */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">PROPPING/ GUYING</h4>
			 {/* Late- 5 Bracks Open to Full Bending */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late- 5 Bracks Open to Full Bending</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={pgLateQ1} onChange={handlepgLateQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={pgLateQ2} onChange={handlepgLateQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={pgLateQ3} onChange={handlepgLateQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={pgLateQ4} onChange={handlepgLateQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Missout- All hands open and beyond */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout- All hands open and beyond</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={pgMissoutQ1} onChange={handlepgMissoutQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={pgMissoutQ2} onChange={handlepgMissoutQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={pgMissoutQ3} onChange={handlepgMissoutQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={pgMissoutQ4} onChange={handlepgMissoutQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation (Lose & Positioning) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation (Lose and Positioning)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={pgImproperQ1} onChange={handlepgImproperQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={pgImproperQ2} onChange={handlepgImproperQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={pgImproperQ3} onChange={handlepgImproperQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={pgImproperQ4} onChange={handlepgImproperQ4} type="number" placeholder="Q4" /></Col>
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
                        <Col> <Form.Control value={pgTotalSamplesQ1} onChange={handlepgTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={pgTotalSamplesQ2} onChange={handlepgTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={pgTotalSamplesQ3} onChange={handlepgTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={pgTotalSamplesQ4} onChange={handlepgTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border border-dark rounded"><h6>Score</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(pgLate + pgMissout + pgImproper)}%</h6></Col>
	   </Row>
    {/* ===================== */}
	{/* END, PROPPING/ GUYING */}
	{/* ===================== */}
	<br />
	<br />
	<br />

	
    {/* ===================== */}
	{/* BUNCH SPRAY */}
	{/* ===================== */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BUNCH SPRAY</h4>
			 {/* Missout */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={bsMissoutQ1} onChange={handlebsMissoutQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={bsMissoutQ2} onChange={handlebsMissoutQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={bsMissoutQ3} onChange={handlebsMissoutQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={bsMissoutQ4} onChange={handlebsMissoutQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Bunch Spray Stain */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bunch Spray Stain</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsBunchQ1} onChange={handlebsBunchQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={bsBunchQ2} onChange={handlebsBunchQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={bsBunchQ3} onChange={handlebsBunchQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={bsBunchQ4} onChange={handlebsBunchQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Undercycle */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Undercycle</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsUndercycleQ1} onChange={handlebsUndercycleQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsUndercycleQ2} onChange={handlebsUndercycleQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsUndercycleQ3} onChange={handlebsUndercycleQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsUndercycleQ4} onChange={handlebsUndercycleQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No Marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Marking</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsNoMarkQ1} onChange={handlebsNoMarkQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsNoMarkQ2} onChange={handlebsNoMarkQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsNoMarkQ3} onChange={handlebsNoMarkQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsNoMarkQ4} onChange={handlebsNoMarkQ4} type="number" placeholder="Q4" /></Col>
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
                        <Col> <Form.Control value={bsTotalSamplesQ1} onChange={handlebsTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsTotalSamplesQ2} onChange={handlebsTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsTotalSamplesQ3} onChange={handlebsTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsTotalSamplesQ4} onChange={handlebsTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border border-dark rounded"><h6>Score</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(bsMissout + bsBunch + bsUndercycle + bsNoMark)}%</h6></Col>
	   </Row>	    
    {/* ===================== */}
	{/* END, BUNCH SPRAY */}
	{/* ===================== */}
	<br />
	<br />
	<br />	  

 
	   </Form>
     </Container>

    </div>
  );
}

export default Create;
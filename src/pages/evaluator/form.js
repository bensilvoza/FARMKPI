
import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import PouchDB from "pouchdb"
import { Container, Row, Col, Form, Accordion, Button } from 'react-bootstrap'



function FormDetails() {
	
	var [form, setForm] = useState("")
	var { formId } = useParams()
console.log(form)
	// =======
	// PouchDB
	// =======
	var db = new PouchDB("Blog")
	console.log("outside")
	useEffect(async function (){
		
		// if user is connected to the internet
		// get the id and go to the database
		if (navigator.onLine){
			var getForm = await axios.get("https://farmkpiback.herokuapp.com/evaluator/" + formId)
			setForm(getForm["data"]["form"])
			
			// terminate
			return
		}
		
		// get
		  try {
	         var f = await db.get(formId)
			 console.log("inside")
			 console.log(f)
			 // add callback to prevent delay
			 setForm( function (){
		     	 return f
			 })
			 console.log(form)
	      }
		  catch (err){
			  console.log(err)
			  console.log("all forms: error")
		  }
	}, [])
	
	
	function handleClickGoBack(){
		return window.location = "/evaluator"
	}
	
	
  return (
    <div>
		  
	<div className="bg-secondary">
    <Container>
		<Row className="justify-content-center">
			<Col xs={10}>
				<h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
			</Col>
		</Row>
	</Container>
	</div>

	{/*
	<Container>
		<Row className="justify-content-center">
			<Col xs={10}>
				<p style={{cursor:"pointer"}} onClick={handleClickGoBack}>GO BACK</p>
			</Col>
		</Row>
	</Container>
	*/}
  
     <Container>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <p className="fw-bold mt-1 mb-0 text-center">TAGUM RESOURCES AGRI INDUSTRIES</p>
			 <p className="fw-bold m-0 text-center">FRUIT CARE  EVALUATION</p>
			 <br />
			 <p className="text-secondary" style={{cursor:"pointer"}} onClick={handleClickGoBack}>GO BACK</p>
			 
			 
			 {/* Information */}
                      <Form.Group className="mb-1">
                        <Form.Label>Farm</Form.Label>
                        <Form.Control value={form["farm"]} readonly />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Location/Block No.</Form.Label>
                        <Form.Control value={form["location"]} />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control value={form["date"]} />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Week No.</Form.Label>
                        <Form.Control value={form["week"]} />
                      </Form.Group>
               
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
					  {form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["bbLateInstallationQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["bbLateInstallationQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["bbLateInstallationQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["bbLateInstallationQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					  }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Miss out (Bending Stage) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Miss out (Bending Stage)</Accordion.Header>
                <Accordion.Body>
					 {form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bbMissOutQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["bbMissOutQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["bbMissOutQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["bbMissOutQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					  }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late Retrieval (3-6 o'clock w/ no bracks open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Retrieval (3-6 o'clock w/ no bracks open)</Accordion.Header>
                <Accordion.Body>
					 {form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bbLateRetrievalQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bbLateRetrievalQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bbLateRetrievalQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bbLateRetrievalQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					  }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bbImproperInstallQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bbImproperInstallQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bbImproperInstallQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bbImproperInstallQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No marking</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bbNoMarkingQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bbNoMarkingQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bbNoMarkingQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bbNoMarkingQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bbTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bbTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bbTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bbTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholeBud"]}%</h6></Col>
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
					{form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["pgLateQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["pgLateQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["pgLateQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["pgLateQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Missout- All hands open and beyond */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout- All hands open and beyond</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["pgMissoutQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["pgMissoutQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["pgMissoutQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["pgMissoutQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation (Lose & Positioning) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation (Lose and Positioning)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["pgImproperQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["pgImproperQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["pgImproperQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["pgImproperQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["pgTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["pgTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["pgTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["pgTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholePropping"]}%</h6></Col>
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
					{form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["bsMissoutQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["bsMissoutQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["bsMissoutQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["bsMissoutQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Bunch Spray Stain */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bunch Spray Stain</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bsBunchQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["bsBunchQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["bsBunchQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["bsBunchQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Undercycle */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Undercycle</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bsUndercycleQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bsUndercycleQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bsUndercycleQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bsUndercycleQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No Marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Marking</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bsNoMarkQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bsNoMarkQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bsNoMarkQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bsNoMarkQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bsTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bsTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bsTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bsTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholeBunch"]}%</h6></Col>
	   </Row>	    
    {/* ================ */}
	{/* END, BUNCH SPRAY */}
	{/* ================ */}
	<br />
	<br />
	<br />
	  
	
	{/* ==== */}
	{/* FDDO */}
	{/* === */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">FDDO</h4>
			 {/* Late (1st pass- 3 to 5 hands open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (1st pass- 3 to 5 hands open)</Accordion.Header>
                <Accordion.Body>
					{form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["fddoLateFirstQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["fddoLateFirstQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["fddoLateFirstQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["fddoLateFirstQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late (final pass- 6 all hands open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (final pass- 6 all hands open)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoLateFinalQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["fddoLateFinalQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["fddoLateFinalQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["fddoLateFinalQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoImproperQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoImproperQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoImproperQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoImproperQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Extreme right */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Extreme right</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoExtremeQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoExtremeQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoExtremeQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoExtremeQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Fused  Finger */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fused  Finger</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoFusedQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoFusedQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoFusedQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoFusedQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Single/ 3 layers */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Single/ 3 layers</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoSingleQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoSingleQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoSingleQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoSingleQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>	 
			 
			 {/* Excess Finger/ mokillo */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Excess Finger/ mokillo</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoExcessQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoExcessQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoExcessQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoExcessQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Missout (3 to 5 nodes) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout (3 to 5 nodes)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoMissoutQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoMissoutQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoMissoutQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoMissoutQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Late (3 to 5 nodes) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (3 to 5 nodes)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoLate3to5Q"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoLate3to5Q"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoLate3to5Q"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoLate3to5Q"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Non following of hand prunning schedule */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Non following of hand prunning schedule</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoNonFollowingQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoNonFollowingQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoNonFollowingQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoNonFollowingQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* No Marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Marking</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoNoMarkQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoNoMarkQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoNoMarkQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoNoMarkQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["fddoTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["fddoTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["fddoTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["fddoTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholeFddo"]}%</h6></Col>
	   </Row>	    
	{/* ========= */}
	{/* END, FDDO */}
	{/* ========= */}
	<br />
	<br />
	<br />
	
	
	
	{/* ====== */}
	{/* BAGSOK */}
	{/* ====== */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BAGSOK</h4>
			 {/* Low Tying */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Low Tying</Accordion.Header>
                <Accordion.Body>
					{form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["bskLowQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["bskLowQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["bskLowQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["bskLowQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No Ponytail */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Ponytail</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskNoPonyQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["bskNoPonyQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["bskNoPonyQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["bskNoPonyQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Short/ Long Cutting of Polybag */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Short/ Long Cutting of Polybag</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskShortQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskShortQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskShortQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskShortQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late Bagging/ Debelling */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Bagging/ Debelling</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskLateQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskLateQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskLateQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskLateQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* No Plastic Insert */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Plastic Insert</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskNoPlasticQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskNoPlasticQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskNoPlasticQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskNoPlasticQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskImproperQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskImproperQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskImproperQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskImproperQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Incomplete */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Incomplete</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskIncompleteQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskIncompleteQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskIncompleteQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskIncompleteQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* No Sunburn Protection (Newspaper) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Sunburn Protection (Newspaper)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskNoSunburnQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskNoSunburnQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskNoSunburnQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskNoSunburnQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["bskTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["bskTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["bskTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["bskTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholeBagsok"]}%</h6></Col>
	   </Row>
	{/* ========= */}
	{/* END, BAGSOK */}
	{/* ========= */}
	<br />
	<br />
	<br />
		  
	

	{/* ============= */}
	{/* LEAF TRIMMING */}
	{/* ============= */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">LEAF TRIMMING</h4>
			 {/* Missout */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout</Accordion.Header>
                <Accordion.Body>
					{form &&
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={form["leafMissoutQ"][0]} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={form["leafMissoutQ"][1]} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={form["leafMissoutQ"][2]} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={form["leafMissoutQ"][3]} required placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late ( ˃ 1 week old) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late ( ˃ 1 week old)</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["leafLateQ"][0]} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={form["leafLateQ"][1]} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={form["leafLateQ"][2]} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={form["leafLateQ"][3]} type="number" placeholder="Q4" required /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Over Cut */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Over Cut</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["leafOverQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["leafOverQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["leafOverQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["leafOverQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Non FOR */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Non FOR</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["leafNonQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["leafNonQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["leafNonQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["leafNonQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
					{form &&
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={form["leafTotalSamplesQ"][0]} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={form["leafTotalSamplesQ"][1]} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={form["leafTotalSamplesQ"][2]} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={form["leafTotalSamplesQ"][3]} type="number" placeholder="Q4" /></Col>
                      </Row>
					 }
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={5} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={5} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["wholeLeaf"]}%</h6></Col>
	   </Row>	
	{/* ================== */}
	{/* END, LEAF TRIMMING */}
	{/* ================== */}
	<br />
	<br />
	

	{/* Overall Score */}
	<Row className="justify-content-center ps-3 pe-3">
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Overall Score</h6></Col>
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["overallScore"]}%</h6></Col>
	</Row>
		 
	<Row className="justify-content-center ps-3 pe-3 mt-1">
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Evaluator</h6></Col>
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["evaluatorName"]}</h6></Col>
	</Row>
	
	<Row className="justify-content-center ps-3 pe-3 mt-1">
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Supervisor</h6></Col>
	  <Col xs={5} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{form["supervisorName"]}</h6></Col>
	</Row>
	

	<br/>
	<br/>
	<br/>
	<br/>

 
	   
     </Container>

    </div>
  );
}

export default FormDetails;
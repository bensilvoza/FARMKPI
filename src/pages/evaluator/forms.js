import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PouchDB from "pouchdb";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Forms() {
  var [forms, setForms] = useState([]);

  // =======
  // PouchDB
  // =======
  var db = new PouchDB("Blog");
  useEffect(async function() {
    // get all
    try {
      var allForms = await db.allDocs({ include_docs: true });
      var allFormsArray = [];
      for (var i = 0; i < allForms["rows"].length; i++) {
        allFormsArray.push(allForms["rows"][i]["doc"]);
      }

      // if user is connected to the internet
      // remove first the _id and _rev to
      // prevent error in mongoDB,
      // send the offline forms to mongoDB
      // and now delete all docs from pouchDB
      // lastly update forms state
      if (navigator.onLine) {
        console.log("running navigator online - codeCheking101");
        for (var i = 0; i < allFormsArray.length; i++) {
          delete allFormsArray[i]["_id"];
          delete allFormsArray[i]["_rev"];
          allFormsArray[i]["status"] = "online";
        }

        if (allFormsArray.length !== 0) {
          var sendOfflineForms = await axios.post(
            "https://farmkpiback.herokuapp.com/evaluator",
            allFormsArray
          );
          if (sendOfflineForms["data"] === "online") {
            console.log("deleting pouchDB - codeCheking101");
            // delete pouchDB
            try {
              await db.destroy();
            } catch (err) {
              console.log(err);
            }

            // update forms state and terminate
            var getAllForms = await axios.get(
              "https://farmkpiback.herokuapp.com/evaluator"
            );
            setForms(getAllForms["data"]);

            // terminate
            return;
          }
        }

        // update forms state and terminate
        var getAllForms = await axios.get(
          "https://farmkpiback.herokuapp.com/evaluator"
        );
        setForms(getAllForms["data"]);

        // terminate
        return;
      }

      // if user is offline
      // run the code below
      allFormsArray.reverse();
      console.log("allFormsArray");
      console.log(allFormsArray);
      // add callback to prevent delay
      setForms(function() {
        return allFormsArray;
      });
    } catch (err) {
      console.log(err);
      console.log("all forms: error");
    }
  }, []);

  // ======================================
  // Code below completely needs a refactor
  // ======================================
  // send all offline form to mongoDB
  // useEffect(async function (){
  // 	var offlineForms = []
  // 	if (forms.length !== 0){
  // 		for (var i = 0; i < forms.length; i++){
  // 			 if (forms[i]["status"] === "offline"){
  // 				 offlineForms.push(forms[i])
  // 			 } else break
  // 		}
  // 		var sendOfflineForms = await axios.post("https://farm-back.run-ap-south1.goorm.io/evaluator", offlineForms)
  // 		if (sendOfflineForms["data"] === "online"){
  // 			// array and object in JavaScript are
  // 			// immutable that is why you need to
  // 			// create a copy, to not destroy the
  // 			// original version
  // 			var formsCopy = []
  // 			for (var i = 0; i < forms.length; i++){
  // 				 formsCopy.push(forms[i])
  // 			}

  // 			// check if PouchDB docs needs an update
  // 			var pageNeedsToBeRefresh
  // 			for (var i = 0; i < formsCopy.length; i++){
  // 				 if (formsCopy[i]["status"] === "offline"){
  // 					 formsCopy[i]["status"] = "online"
  // 					 pageNeedsToBeRefresh = true
  // 				 } else break
  // 			}

  // 			// update document in pouchDB
  // 			for (var i = 0; i < formsCopy.length; i++){
  // 				 try {
  // await db.put(formsCopy[i])
  // }
  // 				 catch (err) {console.log(err)}
  // 			}

  // 			if (pageNeedsToBeRefresh === true) window.location = "/evaluator"
  // 			console.log("Refresh page")
  // 		}

  // 	}
  // }, [forms])

  function handleClick(formId) {
    return (window.location = "/evaluator/" + formId);
  }
  function handleClickCreateForm() {
    return (window.location = "/evaluator/create");
  }
  function handleLogout() {
    return (window.location = "/login");
  }

  return (
    <div>
      <div className="bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} className="p-0 d-flex justify-content-between">
              <h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
              <p
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
                className="text-white align-self-center m-0"
              >
                Logout
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <p className="fw-bold mt-1 mb-0 text-center">
              TAGUM RESOURCES AGRI INDUSTRIES
            </p>
            <p className="fw-bold m-0 text-center">FRUIT CARE EVALUATION</p>
          </Col>
        </Row>

        <br />
        <br />
        <Row className="justify-content-center">
          <Col xs={10} className="p-0 mb-2">
            <div
              onClick={handleClickCreateForm}
              style={{ cursor: "pointer" }}
              className="d-inline"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-plus-square-dotted mb-2"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />{" "}
                </svg>
              </span>
              <span className="ms-2 fs-4">Create Form</span>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-start border rounded p-2 mb-2">
          <Col className="fw-bold" xs={3}>
            Farm
          </Col>
          <Col className="fw-bold" xs={3}>
            Location
          </Col>
          <Col className="fw-bold" xs={4}>
            Conformed
          </Col>
          <Col className="fw-bold" xs={1}>
            Status
          </Col>
        </Row>

        {forms.map((form) => (
          <Row
            key={form["_id"]}
            className="justify-content-start border rounded p-2 mb-2"
            onClick={function() {
              return handleClick(form["_id"]);
            }}
          >
            <Col xs={3}>
              <div>
                {navigator.onLine ? form["form"]["farm"] : form["farm"]}{" "}
              </div>
            </Col>
            <Col xs={3}>
              <div>
                {navigator.onLine ? form["form"]["location"] : form["location"]}{" "}
              </div>
            </Col>
            <Col xs={4}>
              {navigator.onLine ? (
                <div>
                  {" "}
                  {form["form"]["supervisorName"] !== ""
                    ? form["form"]["supervisorName"]
                    : "PENDING"}{" "}
                </div>
              ) : (
                <div>PENDING</div>
              )}
            </Col>
            <Col xs={1}>
              {navigator.onLine ? (
                <div className="d-flex align-items-center">
                  {form["form"]["status"] === "offline" && (
                    <span style={{ color: "red" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </span>
                  )}
                  {form["form"]["status"] === "online" && (
                    <span style={{ color: "green" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </span>
                  )}
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  {form["status"] === "offline" && (
                    <span style={{ color: "red" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </span>
                  )}
                  {Form["status"] === "online" && (
                    <span style={{ color: "green" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </span>
                  )}
                </div>
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Forms;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

function Forms() {
  var [forms, setForms] = useState([]);

  useEffect(async function() {
    // get all forms from mongoDB
    var getAllForms = await axios.get(
      "https://farmkpiback.herokuapp.com/supervisor"
    );
    console.log(getAllForms);
    setForms(getAllForms["data"].reverse());
  }, []);

  function handleClickForm(formId) {
    return (window.location = "/supervisor/" + formId);
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

        <Row className="justify-content-start border rounded pt-2 pb-2 mb-1">
          <Col xs={3}>
            <div className="fw-bold">Farm</div>
          </Col>

          <Col xs={5}>
            <div className="fw-bold">Date</div>
          </Col>
          <Col xs={1}>
            <div className="fw-bold">Status</div>
          </Col>
        </Row>

        {forms.map((form) => (
          <Row
            key={form["form"]["_id"]}
            className="justify-content-start border rounded pt-2 pb-2 mb-1"
            onClick={function() {
              return handleClickForm(form["_id"]);
            }}
          >
            <Col xs={3}>
              <div> {form["form"]["farm"]} </div>
            </Col>

            <Col xs={5}>
              <div> {form["form"]["date"]} </div>
            </Col>
            <Col xs={1}>
              <div>
                {form["form"]["supervisorName"] === "" && (
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
                {form["form"]["supervisorName"] !== "" && (
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
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Forms;

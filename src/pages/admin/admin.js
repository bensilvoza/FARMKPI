import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MD5 from "../../helpers/MD5";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import PouchDB from "pouchdb";

function Dashboard() {
  var [users, setUsers] = useState([]);

  function handleClickCreateRole() {
    return (window.location = "/admin/create");
  }

  function handleClickLogout() {
    return (window.location = "/login");
  }

  function handleCurrentDivId(id) {
    return (window.location = "/user/" + id);
  }

  useEffect(async function() {
    var data = await axios.get("https://farmkpiback.herokuapp.com/register");
    setUsers(data);
  }, []);

  return (
    <div>
      <div className="bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} className="d-flex justify-content-between">
              <h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={handleClickLogout}
              >
                <p className="m-0 text-white">Log out</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          {users.length !== 0 && (
            <Col xs={10}>
              <br />
              <h2 className="text-center mb-4">ADMINISTRATOR</h2>
              <div
                onClick={handleClickCreateRole}
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
                <span className="ms-2 fs-4">Create Role</span>
              </div>
              {users["data"].map((user) => (
                <div className="mb-2" key={user["_id"]}>
                  <div className="border border-secondary rounded p-3">
                    <div className="d-flex justify-content-between">
                      <p className="m-0">
                        First Name: {user["fname"].toUpperCase()}
                      </p>

                      <p
                        onClick={function() {
                          return handleCurrentDivId(user["_id"]);
                        }}
                        className="m-0 text-secondary"
                      >
                        EDIT
                      </p>
                    </div>
                    <p className="m-0">
                      Last Name: {user["lname"].toUpperCase()}
                    </p>
                    <p className="m-0">Role: {user["role"].toUpperCase()}</p>
                    <p className="m-0">Email: {user["email"]}</p>
                  </div>
                </div>
              ))}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

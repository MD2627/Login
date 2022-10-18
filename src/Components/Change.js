import React, { useState, useEffect } from "react";
import Errror from "./Errror";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Change() {
  const [spass, setSPass] = useState();
  const [newp, setNewp] = useState();
  const [logindata, setLogindata] = useState([]);
  const logedin = useNavigate();
  const currentPass = JSON.parse(localStorage.getItem("user_login"));

  const Getdata = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLogindata(user);
    }
  };
  useEffect(() => {
    Getdata();
  }, []);
  const passChange = (e) => {
    e.preventDefault();
    if (spass == null) {
      alert("enter old pass");
    } else if (newp == null) {
      alert("pleasr enter new password");
    } else if (spass !== currentPass[0].password) {
      alert("Old Password is not match");
    } else {
      if (newp === currentPass[0].password) {
        alert("can not use Old Password");
      } else {
        currentPass[0].password = newp;
        localStorage.setItem("user", JSON.stringify(currentPass));
        localStorage.removeItem("user_login");
        logedin("/login");
      }
    }
  };
  return (
    <>
      {logindata.length === 0 ? (
        <Errror />
      ) : (
        <>
          <Form className="container col-4" onSubmit={passChange}>
            <h1 className="my-4">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(ev) => {
                  setSPass(ev.target.value);
                }}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newpassword"
                onChange={(ev) => {
                  setNewp(ev.target.value);
                }}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </>
  );
}
export default Change;

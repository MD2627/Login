import React, { useState, useEffect } from "react";
import Errror from "./Errror";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Change() {
  const [spass, setSPass] = useState()
  const [newp, setNewp] = useState()
  const [logindata, setLogindata] = useState([]);
  const logedin = useNavigate();
  const logdinData = JSON.parse(localStorage.getItem("user_login"));
 
  const currentPass = logdinData[0]['password']
    
  
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
   if (spass === currentPass){
      console.log("matched");
    } if(newp === currentPass){
      alert('can not use old pass')
    }else{
      localStorage.setItem("pass",JSON.stringify(newp))

      // localStorage.removeItem("user_login");
      logedin("/login");
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
                onChange={(ev) => { setSPass(ev.target.value) }}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newpassword"
                onChange={(ev) => { setNewp(ev.target.value) }}
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

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Errror from "./Errror";
import Container from "react-bootstrap/Container";

function Details() {
  const [logindata, setLogindata] = useState([]);
  const logedin = useNavigate();

  const userlogout = () => {
    localStorage.removeItem("user_login");
    logedin("/");
  };

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

  const userChange = (e) => {
    e.preventDefault();
    console.log("jump to change passs");
    logedin("/change");
  };
  return (
    <>
      {logindata.length === 0 ? (
        <Errror />
      ) : (
        <>
          <Container className="text-center">
            <h1>detials page</h1>
            <h1> Hello {logindata[0].name} You Are SucessFully Login</h1>
            <Button variant="danger mx-3" onClick={userlogout}>
              LogOut
            </Button>
            <Button variant="danger" onClick={userChange}>
              Change Password
            </Button>
          </Container>
        </>
      )}
    </>
  );
}

export default Details;

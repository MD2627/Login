import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const logedin = useNavigate();

  const [valu, setValu] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;
    setValu(() => {
      return {
        ...valu,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const compare = localStorage.getItem("user");
    const { email, password } = valu;
    if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("plaese enter valid email address");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 4) {
      alert("password is invalid");
    } else {
      if (compare && compare.length) {
        const userData = JSON.parse(compare);
        const userLogin = userData.filter((el, i) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid Email ");
        } else {
          console.log("user login");
          localStorage.setItem("user_login", JSON.stringify(userData));
          logedin("/details");
        }
      }
    }
  };
  return (
    <div className="container col-4">
      <Form>
        <h1 className="my-4">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={getData}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={getData}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="danger" onClick={addData} type="submit">
          Submit
        </Button>
      </Form>
      <p className="my-3">
        Dont have one{" "}
        <span>
          {" "}
          <NavLink to="/">SinUp</NavLink>
        </span>
      </p>
    </div>
  );
}

export default Login;

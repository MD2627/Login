import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const logedin = useNavigate();
  const [valu, setValu] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
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
    const { name, email, password } = valu;
    if (name === "") {
      alert("name is required");
    } else if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("plaese enter valid email address");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 4) {
      alert("password in to shoret");
    } else {
      localStorage.setItem("user", JSON.stringify([...data, valu]));
      logedin("/login");
    }
  };
  return (
    <div className="container col-4">
      <Form>
        <h1 className="my-4">Register</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={getData}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={getData}
            placeholder="Enter your email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        Already have an Account{" "}
        <span>
          <NavLink to="/login"> signin</NavLink>
        </span>
      </p>
    </div>
  );
}

export default Home;

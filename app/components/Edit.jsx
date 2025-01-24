"use client";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("Name") || "");
    setAge(localStorage.getItem("Age") || "");
    setId(localStorage.getItem("Id") || "");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || age.trim() === "" || isNaN(age) || +age <= 0) {
      alert("Please provide valid inputs.");
      return;
    }
    const index = array.findIndex((item) => item.id === id);
    if (index === -1) {
      alert("Item not found. Please try again.");
      return;
    }

    array[index].Name = name;
    array[index].Age = age;
    navigate("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;

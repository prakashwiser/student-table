"use client"
import React from 'react'
import array from "./array";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();


  function setID(id, name, age) {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }

  function deleted(id) {
    const index = array.findIndex((e) => e.id === id);
  
    if (index !== -1) {
      array.splice(index, 1);
      navigate("/");
    } else {
      console.error("Element with the given ID not found.");
    }
  }
  
return (
  <div className='container my-2'>
    <div className='d-flex justify-content-between'>
      <h1 className="wiser">Wiser Web Tutor</h1>
      <Link to="/create">
        <Button variant="success" size="lg">
          Create New User
        </Button>
      </Link>
    </div>
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead className="thead-dark">
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {array.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>
                <Link to={`/edit`}>
                  <Button
                    onClick={() => setID(item.id, item.Name, item.Age)}
                    variant="info"
                    className="me-2 text-white  "
                  >
                    Update
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  onClick={() => deleted(item.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>

  </div>
)
}

export default App;
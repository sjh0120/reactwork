import axios from 'axios';
import React, { useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';

function EmpAdd() {
  const empno=useRef();
  const ename=useRef();
  const job=useRef();
  const sal=useRef();
  let navigate = useNavigate();

  const insert=(e)=>{
    e.preventDefault();
    console.log(empno.current.value,ename.current.value,job.current.value,sal.current.value);
    axios.post('http://localhost:8082/api/addEmp',{
      empno:empno.current.value,
      ename:ename.current.value,
      sal:sal.current.value,
      job:job.current.value
    })
    .then(e=>{
      if(e.data.result){
        navigate('/emp');
      }
    })
  };

  return (
    <>
    <h1>EmpAdd</h1>
    <Form onSubmit={insert}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>empno</Form.Label>
        <Form.Control type="text" placeholder="empno" ref={empno}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ename</Form.Label>
        <Form.Control type="text" placeholder="ename" ref={ename} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>sal</Form.Label>
        <Form.Control type="text" placeholder="sal" ref={sal} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>job</Form.Label>
        <Form.Control type="text" placeholder="job" ref={job} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="primary" type="reset">reset</Button>
      <Button variant="primary" type="button">back</Button>
    </Form>
    </>
  )
}

export default EmpAdd
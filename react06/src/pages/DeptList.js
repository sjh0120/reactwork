import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom'

function DeptList() {
  const [arr,setArr]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:7071/api/dept/")
      .then(e=>{setArr(e.data)})
      .catch(err=>console.log(err.message));
    const arr=[];
    setArr(arr);
  },[]);

  return (
    <Container>
      <h1>List Page</h1>
      <CardGroup>
        {arr.map((bean,idx)=>(
        <Card key={bean.deptno}>
          <Card.Body>
            <Card.Title>{bean.deptno}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{bean.dname}</Card.Subtitle>
            <Card.Text>{bean.loc}</Card.Text>
            <Card.Link as={Link} to={"/dept/"+bean.deptno}>Detail</Card.Link>
          </Card.Body>
        </Card>
        ))}

      </CardGroup> 
    </Container>
  )
}

export default DeptList
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import { Container,Form,Button } from 'react-bootstrap';

function DeptOne() {
  const [bean,setBean] =useState({});
  const [edit,setEdit]=useState(false);
  let { deptno } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    console.log(typeof deptno);
    axios.get('http://localhost:7071/api/dept/'+deptno)
        .then(e=>{
          console.log(typeof e, e.data);
          setBean(e.data);
        });
  },[]); 
  
  const editHandler=(e)=>{
    e.preventDefault();
    setEdit(!edit);
    if(edit){
      axios.put('http://localhost:7071/api/dept/'+bean.deptno,bean)
      .then(e=>{
        if(e.data.result){
          navigate('/dept');
        }
      });
    }
  };
  const backHandler=()=>navigate(-1);
  const inputHandler=(e)=>{
    setBean({...bean,[e.target.name]:e.target.value});
  }
  const deleteHandler=(e)=>{
    axios.delete('http://localhost:7071/api/dept/'+bean.deptno)
    .then(e=>e.status==200?navigate('/dept'):window.alert('삭제 실패'))
    .catch(e=>window.alert('삭제 실패'));
  }

  // const dnameHandler=(e)=>{
  //   setBean({...bean,dname:e.target.value});
  // }

  // const locHandler=(e)=>{
  //   setBean({...bean,loc:e.target.value});
  // }

  return (
    <Container>
      <h1>{edit?'수정 페이지':'상세 페이지'}</h1>
      <Form onSubmit={editHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>deptno</Form.Label>
          <Form.Control type="text" value={bean.deptno} name="deptno" readOnly={true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>dname</Form.Label>
          <Form.Control type="text"
                        value={bean.dname}
                        name="dname"
                        readOnly={!edit}
                        onChange={inputHandler}
                        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>loc</Form.Label>
          <Form.Control type="text"
                        value={bean.loc}
                        name="loc"
                        readOnly={!edit}
                        onChange={inputHandler}
                        />
        </Form.Group>
        <Button variant="primary" type="submit">Update</Button>
        {edit?
        <Button variant="default" type="reset">Reset</Button>
        :
        <Button variant="danger" type="button" onClick={deleteHandler}>Delete</Button>
        }
        <Button variant="default" type="button" onClick={backHandler}>Back</Button>
      </Form>
    </Container>
  )
}

export default DeptOne
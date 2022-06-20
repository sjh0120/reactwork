import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function EmpList() {
  const [arr,setArr]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8082/api/emp")
      .then(e=>{setArr(e.data)});
    const arr=[];
    setArr(arr);
  },[]);
  return (
    <>
    <h1>EmpList</h1>
    <table className='table'>
        <thead>
          <tr>
            <th>empno</th>
            <th>ename</th>
            <th>job</th>
            <th>sal</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((bean,idx)=>(
            <tr key={bean.empno}>
              <td><Link as={Link} to={"/emp/"+bean.empno}>{bean.empno}</Link></td>
              <td><Link as={Link} to={"/emp/"+bean.empno}>{bean.ename}</Link></td>
              <td><Link as={Link} to={"/emp/"+bean.empno}>{bean.job}</Link></td>
              <td><Link as={Link} to={"/emp/"+bean.empno}>{bean.sal}</Link></td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  )
}

export default EmpList
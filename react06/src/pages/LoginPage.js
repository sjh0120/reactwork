import React, { useContext, useRef } from 'react'
import UserCtxt, { LOGIN } from './../modules/store';

function LoginPage() {
  const user=useContext(UserCtxt);
  const inputId=useRef();
  const inputPw=useRef();

  const loginHandler=(e)=>{
    e.preventDefault();
    console.log(inputId.current.value,inputPw.current.value,user.dispatch);
    user.dispatch({type:LOGIN,userName:inputId.current.value});
  };

  return (
    <>
      <h1>login page</h1>
      <form onSubmit={loginHandler}>
        <label> id:
          <input ref={inputId}/>
        </label>
        <label> pw:
          <input ref={inputPw}/>
        </label>
        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default LoginPage
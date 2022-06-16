import React from "react";
import {Route,Routes, BrowserRouter as Router,Link} from "react-router-dom";
import Home from "./page/Home";
import Emp from "./page/Emp";
import Dept from "./page/Dept";
import Login from "./page/Login";

function App() {
  return (
    //index.js에서 <BrowserRouter>를 하지 않았다면 <>에 Router를 써야만함!
    <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/emp">Emp</Link>
          <Link to="/dept">Dept</Link>
          <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/emp" element={<Emp/>}/>
        <Route path="/dept" element={<Dept/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;

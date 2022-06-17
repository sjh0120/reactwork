import './App.css';
import React from 'react';
import Home from './pages/Home';
import Intro from './pages/Intro';
import DeptList from './pages/DeptList';
import DeptAdd from './pages/DeptAdd';
import Login from './pages/Login';
import Mnav from './module/Mnav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Mnav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/intro" element={<Intro />}/>
      <Route path="/dept" element={<DeptList />}/>
      <Route path="/add" element={<DeptAdd />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

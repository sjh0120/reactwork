import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './modules/Menubar';
import Home from './pages/Home';
import EmpList from './pages/EmpList';
import EmpOne from './pages/EmpOne';
import EmpAdd from './pages/EmpAdd';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <BrowserRouter>
    <Menubar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/emp" element={<EmpList />}/>
      <Route path="/emp/:empno" element={<EmpOne />}/>
      <Route path="/addEmp" element={<EmpAdd />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/join" element={<JoinPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

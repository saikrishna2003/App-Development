import './App.css';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/123" element={<Products />}/>
    </Routes>
  </BrowserRouter> 
  
      
  );
}

export default App;

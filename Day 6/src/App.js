import './App.css';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import Products from './Products';
import DisplayProducts from './DisplayProducts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/123" element={<Products />}/>
      <Route path="/345" element={<DisplayProducts />}/>
    </Routes>
  </BrowserRouter> 
  
      
  );
}

export default App;

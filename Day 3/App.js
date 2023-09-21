import './App.css';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login />} />
      <Route path="/Register" element={<Register />}>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;

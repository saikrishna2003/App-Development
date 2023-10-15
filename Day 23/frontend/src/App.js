import "./App.css"
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom"
import Pages from "./components/pages/Pages"
import CustomerCrud from "./components/admin/CustomerCrud.js";



function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
           <Pages /> 
      </Router>
      </BrowserRouter>
  
    </>
  )
}

export default App

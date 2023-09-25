import "./App.css"
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom"
import Login from "./components/loginsignup/Login"
import SignUp from "./components/loginsignup/SignUp"
import Pages from "./components/pages/Pages"
import Footer from "./components/common/footer/Footer"
import Header from "./components/common/header/Header"

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
           <Pages />
      </Router>
      </BrowserRouter>

  
    </>
  )
}

export default App

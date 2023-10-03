import React from "react"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Home from "../home/Home"
import Contact from "../contact/contact";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom"
import About from "../about/About"
import PP from "../pp/pp.jsx"
import FAQ from "../faq/faq.jsx"
import TC from "../tc/tc.jsx"
import Login from "../loginsignup/Login"
import SignUp from "../loginsignup/SignUp"

const Pages = () => {
  return (
    <>
    <BrowserRouter>
      <Router>
        {/* <Header /> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/pp' component={PP} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/tc' component={TC} />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} /> */}
        {/* <Footer /> */}
      </Router>
      </BrowserRouter>
    </>
  )
}

export default Pages

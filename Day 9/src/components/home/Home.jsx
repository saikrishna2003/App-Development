import React from "react"
import Blog from "./blog/Blog"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Menu from "./menu/Menu"


const Home = () => {
  return (
    <>
    <Header/>
      <Menu />
      <Blog />
      <Footer/>
    </>
  )
}

export default Home

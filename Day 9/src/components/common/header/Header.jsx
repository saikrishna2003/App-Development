import React, { useState } from "react"
import { navList } from "../../data/Data"
import "./header.css"
import { UseSelector, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Header = () => {
  const user = useSelector((state)=>state.user.value)
  const [show, setShow] = useState(false)

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      <header className='header'>
        <div className='container paddingTB flexSB'>
          {/* ------  logo  --------- */}
          <div className='logo'>
            <img src='./images/logo4.png' alt='' />
          </div>
          {/* ------  menu list  --------- */}
          <div className='nav utext'>
            <ul className={show ? "mobile-nav" : "flexSB"}>
              {navList.map((nav, index) => (
                <li key={index} className='mlr'>
                  <Link to={nav.path}>{nav.text}</Link>
                </li>
              ))}
            <p><h3>{user.name}</h3></p>
            </ul>
          </div>
          {/* ------  search box --------- */}
          {/* <div className='search flexSB'>
            {/* <input type='text' placeholder='Search Keywords' /> */}
            {/* <i className='fa fa-search'></i> */}
          {/* </div> */}
          {/* <div className='shop flexSB'>
            <div className='cart'>
              <i class='fa fa-bag-shopping icon'></i>
              <span>0</span>
            </div>
            <div className='cart'>
              <i className='fa fa-heart icon'></i>
              <span>0</span>
            </div>
          </div> */} 
          {/* ------  toggle  --------- */}
          {/* <div className='toggle' onClick={() => setShow(!show)}>
            <button>{show ? <i className='fa fa-times icon'></i> : <i className='fa fa-bars icon'></i>}</button>
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header

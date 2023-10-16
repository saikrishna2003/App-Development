import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navList } from "../../data/Data";
import "./header.css";

const Header = ({ avatar }) => {
  const user = useSelector((state) => state.user.value);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  console.log("selectedAvatar:", avatar);

  return (
    <header className="header">
      <div className="container paddingTB flexSB">
        <div className="logo">
          <img src="./images/logo4.png" alt="kidszone" />
        </div>
        <div className="nav utext">
          <ul className={avatar ? "mobile-nav" : "flexSB"}>
            {navList.map((nav, index) => (
              <li key={index} className="mlr">
                {/* Check if the current index is 2 to add a dropdown */}
                {index === 1 ? (
                  <div className="dropdown">
                    <span>{nav.text}</span>
                    <div className="dropdown-content">
                      <Link to="/story">STORY'S</Link>
                      <Link to="/submenu-item-2">EDUCATIONAL</Link>
                      <Link to="/games">GAMES</Link>
                      <Link to="/td">Materials</Link>
                    </div>
                  </div>
                ) : (
                  <Link to={nav.path}>{nav.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        </div>
    </header>
  );
};

export default Header;

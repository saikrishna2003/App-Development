import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Heading from "../../common/Heading";
import { menu } from "../../data/Data";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <section className="menu">
        <div className="scontainer">
          <Heading subtitle="Your Favorite" title="CHARACTERS HERE" />

          <div className="content grid">
            {menu.map((item, index) => (
              <div className="box" key={index}>
                <Link to={`/story/`}> {/* Use Link to create a link */}
                  <div className="id flexSB">
                    <span>{item.icon}</span>
                    <h1>0{item.id}</h1>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <img src={item.cover} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

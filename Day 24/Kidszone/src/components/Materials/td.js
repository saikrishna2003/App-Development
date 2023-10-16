import React from "react";
import { Link } from "react-router-dom";
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import Heading from "../common/Heading";
import "../games/games.css"

const Td = () => {
  const td = [
    {
      id: 1,
      title: "White Board",
      image: "https://www.bing.com/th/id/OIG.gl64DPKesEmt5EbywDWX?w=540&h=540&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      description: "A whiteboard is a glossy, usually white surface for making non-permanent markings. Whiteboards are analogous to blackboards, but with a smoother surface allowing for rapid marking and erasing of markings on their surface.",
    },
    {
      id: 2,
      title: "Pronunciation Learner",
      image: "https://th.bing.com/th/id/OIG.j_OYygSYoQfdWJqe7Nf3?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      description: "Your ultimate online destination to perfect your language pronunciation. Listen to native speakers, and practice. Get expert guidance, correct common mistakes and Boost your speaking confidence now!",
    }
  ];

  return (
    <div>
      <Header />
      <Heading  subtitle="Your Favourite" title="MATERIALS HERE" />
      <div className="first">
        <div className="grid-row">
          {td.map((td) => (
            <div className="cardu" key={td.id}>
              <Link to={`/td/${td.id}`}>                                         
              {/* You can replace the 'Link' component with your custom navigation */}
              <img src={td.image} alt="td-image" className="gameImage" />
              <div className="gameCard_content">
                <h2 className="tdTitle">{td.title}</h2>
                <p>{td.description}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Td;

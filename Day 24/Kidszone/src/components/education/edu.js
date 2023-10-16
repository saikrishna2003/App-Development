import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import "./edu.css"; // Import your custom CSS for the educational page
import Heading from "../common/Heading";

const Education = () => {
  const [educationalContent, setEducationalContent] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Modify the API endpoint to fetch educational content
    axios
      .get("http://localhost:8080/education/get", config)
      .then((response) => {
        setEducationalContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching educational content: ", error);
      });
  }, [token]);

  return (
    <div>
      <Header />
      <Heading subtitle="Explore Educational" title="Content" />
      <div className="education-page"> {/* Update the CSS class for your educational page */}
        <div className="grid-row">
          {educationalContent.map((content) => (
            <div className="card" key={content.eid}>
              {/* Link to the educational content detail page */}
              <Link to={`/educontent/${content.eid}`}>View Details</Link>
              <img src={content.imgUrl} alt="content-image" className="contentImage" />
              <div className="contentCard_content">
                <h2 className="eduContentTitle">{content.topicname}</h2>
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;

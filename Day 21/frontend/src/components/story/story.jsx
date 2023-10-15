import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import "./story.css";
import Heading from "../common/Heading";

const Story = () => {
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:8080/books/get", config)
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [token]);

  return (
    <div>
      <Header />
      <Heading subtitle="Your Favorite" title="STORY'S HERE" />
      <div className="first">
        <div className="grid-row">
          {stories.map((story) => (
            <div className="card" key={story.bid}>
              {/* Link to ControlPlayer component */}
              <Link to={`/controlplayer/${story.bid}`}>View Video</Link>
              <img src={story.imgURl} alt="home-image" className="homeImage" />
              <div className="homeCard_content">
                <h2 className="stoContent">{story.bookname}</h2>
                <p>{story.bookdescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Story;








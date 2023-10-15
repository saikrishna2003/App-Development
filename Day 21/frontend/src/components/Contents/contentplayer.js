import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import ReactPlayer from "react-player";
import "./contentplayer.css";

const ControlPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`http://localhost:8080/books/${videoId}`, config)
      .then((response) => {
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [videoId]);

  return (
    <div>
      <Header />
      <div className="container">
        {selectedVideo && (
          <div className="w-full">
            <ReactPlayer
              url={selectedVideo.videoURl}
              width="100%"
              height="400px"
              controls={true}
            />
          </div>
        )}
        <div className="video-info">
          {selectedVideo && (
            <div>
              <h5 className="book-title">{selectedVideo.bookname}</h5>
              <p5 className="book-description">{selectedVideo.bookdescription}</p5>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ControlPlayer;

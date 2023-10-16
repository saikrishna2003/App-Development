import React from "react";
import { Link } from "react-router-dom";
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import Heading from "../common/Heading";
import "./games.css"

const Game = () => {
  const games = [
    {
      id: 1,
      title: "TIC TAC TOE",
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQsJEpbrBLWAyjRR82eWUxKb4WpXjIOVB-g-KFOkyaP1zSPympYcoYd61hef9xEnRzT",
      description: "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    },
    {
      id: 2,
      title: "Game 2",
      image: "lol",
      description: "Description for Game 2",
    },
    {
      id: 3,
      title: "Game 3",
      image: "lol",
      description: "Description for Game 3",
    },
    // Add more game objects as needed
  ];

  return (
    <div>
      <Header />
      <Heading subtitle="Your Favorite" title="GAMES HERE" />
      <div className="first">
        <div className="grid-row">
          {games.map((game) => (
            <div className="cardu" key={game.id}>
              <Link to={`/game/${game.id}`}>                                         
              {/* You can replace the 'Link' component with your custom navigation */}
              <img src={game.image} alt="game-image" className="gameImage" />
              <div className="gameCard_content">
                <h2 className="gameTitle">{game.title}</h2>
                <p>{game.description}</p>
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

export default Game;

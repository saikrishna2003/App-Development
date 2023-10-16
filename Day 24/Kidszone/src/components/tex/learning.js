import React, { useState } from 'react';
import TextToSpeech from './tex';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './learning.css';

const Learning = () => {
  const [userText, setUserText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startSpeaking = () => {
    setIsSpeaking(true);
  };

  return (
    <div>
      <div className='yo1'>
        <div className='yo'>
          <h1>Your Place To Learn Pronunciation</h1>
        </div>
      </div>
      <textarea
        placeholder="Enter text..."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      ></textarea>
      <button onClick={startSpeaking}>Speak</button>
      {isSpeaking && <TextToSpeech text={userText} />}

      {/* Add a Link to the home page as a button on the right side */}
      <div style={{ textAlign: 'right' }}>
     <button>
       <Link to="/td" className="back-button">Back to Materials Page</Link>
      </button>  
      </div>
    </div>
  );
};

export default Learning;

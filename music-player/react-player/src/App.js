import React, { useState }from 'react';
// Import Styles
import "./styles/app.scss";
// Addin Components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
      />
    </div>
  );
}

export default App;
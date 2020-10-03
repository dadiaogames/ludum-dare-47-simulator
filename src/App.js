import React, { useState } from 'react';
import './Board.css';
import { Dialog } from './Dialog';

function TitleScreen(props) {
  return (
    <div className="board" align="center">
      <h1 className="title">Ludum Dare 47 Simulator</h1>
      <button className="play-button" onClick={props.play}>Play this s**t</button>
    </div>
  );
}

function App() {
  const dialogs = [
    "Hi There, I am a game developer, and I am now participating in Ludum Dare 47.",
    "It's a game event where games are made from scratch in a weekend. A theme is designated every time and all games should be around that theme.",
    "Let me look at what this time's theme is...",
    "Oh, it's \"Stuck in a loop\".",
    "It's such a hard theme, let me grab some ideas...",
    "Oh, I got a awesome one!",
    "I gonna make a game about a game developer participating a game jam called \"ludum dare\" and the theme is \"stuck in a loop\", and this game is about him/her making the game...",
    "And let's dive in! [Working, working, working], it's finished!",
    "Here the game is, check it out:",
  ];
  let [idx, setIdx] = useState(-1);

  let play = () => setIdx(0);
  let next = () => setIdx(x => (x < dialogs.length-1)?x+1:-1);
    
  if (idx == -1) {
    return <TitleScreen play={play} />
  } 
  else {
    return <Dialog content={dialogs[idx]} next={next} />
  }

}

export default App;

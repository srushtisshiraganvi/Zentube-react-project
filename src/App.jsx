import React, { useState } from "react";
import VIDEO from "./video.json";
import Container from "./Container";
import "./App.css";

const App = () => {
  const [state, setState] = useState(VIDEO);
  const [play, setPlay] = useState(state[0]);

  const handlePlay = (video) => {
    setPlay(video);
  };

  return (
    <div id="app">
      <header className="app-header">
        <h1 className="logo">
          <span style={{ color: "skyblue" }}>▶</span> Zentube
        </h1>
        <p className="tagline">Watch. Learn. Relax. Repeat.</p>
      </header>

      <Container state={state} play={play} run={handlePlay} />
    </div>
  );
};

export default App;

import React, { useState } from 'react'
import VIDEO from "./video.json"
import Container from './Container'
import "./App.css"

const App = () => {
  let [state, setState] = useState(VIDEO)
  let [play, setPlay] = useState(state[0].videoUrl)

  let handlePlay = (video) => {
    setPlay(video.videoUrl)
  }

  return (
    <div id='app'>
      <header className='app-header'>
        <h1 className='logo'>🎬 StreamBox</h1>
        <p className='tagline'>Watch. Explore. Enjoy.</p>
      </header>

      <Container state={state} play={play} run={handlePlay}></Container>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import VIDEO from "./video.json"
import Container from './Container'
import "./App.css"
const App = () => {
   let [state,setState]=useState(VIDEO)

   let [play,setPlay]=useState(state[0])

   let handlePlay=(lio)=>{
     setPlay(lio.videoUrl)

   }

  return (
    <div id='app'>
        <Container state={state} play={play} run={handlePlay}></Container>
    </div>
  )
}

export default App
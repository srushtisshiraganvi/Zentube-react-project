import React from 'react'
import "./App.css"

const VideoItems = (props) => {
  return (
    <div className="video-card" onClick={() => props.run(props.data)}>
      <img src={props.data.thumbnailUrl} alt={props.data.title} />
      <div className="video-info">
        <h1>{props.data.title}</h1>
      </div>
    </div>
  )
}

export default VideoItems

import React from 'react'

const VideoPlay = (props) => {
  return (
    <div>
        {
            <video height={300} width={400} controls autoPlay muted src={props.play}></video>
        }
    </div>
  )
}

export default VideoPlay
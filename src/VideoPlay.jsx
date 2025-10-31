import React from 'react'

const VideoPlay = ({ play }) => {
  return (
    <div className='video-player'>
      <video controls autoPlay muted src={play}></video>
    </div>
  )
}

export default VideoPlay

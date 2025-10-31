import React from 'react'
import "./App.css"


const VideoItems = (props) => {

  return (
    <div>

        <div className="video-card" onClick={()=>{props.run(props.data)}}>
        
           <img height={200} width={200} src={props.data.thumbnailUrl} alt="" />
            <div className="video-info">
                <h1>{props.data.title}</h1>
           </div>
    </div>
    </div>
    
  )
}

export default VideoItems
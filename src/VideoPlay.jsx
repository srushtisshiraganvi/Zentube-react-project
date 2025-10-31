import React from "react";

const VideoPlay = ({ play }) => {
  return (
    <div className="video-player">
      <video src={play.url} poster={play.thumbnailUrl} controls></video>
      <div className="video-details">
        <h2>{play.title}</h2>
        <p className="video-meta">
          {play.views} views • {play.published}
        </p>
        <p className="video-author">{play.channel}</p>
        <p className="video-description">{play.description}</p>
      </div>
    </div>
  );
};

export default VideoPlay;

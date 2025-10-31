import React from "react";

const VideoItems = ({ videos, run }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div
          key={video.id}
          className="video-item"
          onClick={() => run(video)}
        >
          <img src={video.thumbnailUrl} alt={video.title} />
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
            <span className="meta">
              {video.views} views • {video.published}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoItems;

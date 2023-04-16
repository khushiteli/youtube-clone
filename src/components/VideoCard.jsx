import React from 'react'
import { Link } from 'react-router-dom'

import { demoVideoUrl } from "../utils/constants"


const VideoCard = ({video : { id : { videoId } , snippet }}) => {
  return (
    <>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="video-thumbnail"
        />
        <div className="video-text">
          <p className="video-title">{snippet?.title.slice(0, 120)}</p>
          <p className="channel-title">{snippet?.channelTitle}</p>
        </div>
      </Link>
    </>
  );
}

export default VideoCard
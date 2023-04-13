import React from 'react'
import { Link } from 'react-router-dom'

import { demoVideoUrl } from "../utils/constants"


const VideoCard = ({video : { id : { videoId } , snippet }}) => {
  return (
    <>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className=' w-[360px]'>
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className=" w-[358px] object-contain"
          />
          <p className='text-white'>{snippet?.title.slice(0, 60)}</p>
          <p className="text-white opacity-4">{snippet?.channelTitle}</p>
        </div>
      </Link>
    </>
  );
}

export default VideoCard
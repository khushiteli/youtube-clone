import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FetchVideo, FetchSuggestedVideo } from "../utils/FetchFromAPI";
import {VideoCard } from './';
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const [video, setVideo] = useState([]);
  const [suggestedVideos , setSuggestedVideos] = useState([]);
  const id = useParams();
  
  useEffect(()=>{
    FetchVideo(id.id).then((data) => {
      setVideo(data.items[0]);
      console.log(data.items[0]);
    });

    FetchSuggestedVideo(id.id).then((data) => {
      setSuggestedVideos(data.items);
      console.log(data.items);
    });
  },[id.id])

  return (
    <div>
      <div className="border-2">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id.id}`}
          controls={true}
          // playing={true}
          width="90vw"
          height="90vh"
        />

        <p>{video?.snippet?.title}</p>
      </div>

      <div className="flex flex-wrap justify-center items-center content-center">
        {suggestedVideos.map((item, key) => (
          <div>{item.id.videoId && <VideoCard video={item} key={key} />}</div>
        ))}
      </div>
    </div>
  );
}

export default VideoDetails

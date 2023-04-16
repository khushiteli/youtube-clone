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
    <div className="video-in-detail">
      <div className="main-videos">
        <span className='full-video'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id.id}`}
            controls={true}
            height="60vh"
            width="100%"
            style={{padding:15}}
            className="playing-video"
          />

          <p>{video?.snippet?.title}</p>
        </span>
        <span className="videos-in-channel">
          {suggestedVideos.map((item, key) => (
            <div className="feed-video">
              {item.id.videoId && <VideoCard video={item} key={key} />}
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}

export default VideoDetails

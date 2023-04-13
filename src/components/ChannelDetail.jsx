import React, { useEffect, useState } from 'react'
import {ChannelCard , VideoCard} from './'
import { FetchChannels, FetchChannelVideos } from "../utils/FetchFromAPI";
import { useParams } from 'react-router-dom'

const ChannelDetail = () => {
  const [videos , setVideos] = useState([]);
  const [channel , setChannel] = useState([]);
  const id = useParams();

  // channels?part=snippet&id=UCmXmlB4-HJytD7wek0Uo97A
  useEffect(()=>{
    FetchChannels(id.id).then((data) => {
      setChannel(data.items);
      console.log(data);
    });

    FetchChannelVideos(id.id).then((data) => {
      setVideos(data.items);
      console.log(data);
    });

  },[id.id])
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-[120px]"></div>
      {channel.map((item, key) => (
        <div>
          <ChannelCard channelDetails={item} key={key} />
        </div>
      ))}
      {videos.map((item, key) => (
        <div>
          {item.id.videoId && <VideoCard video={item} key={key} />}
        </div>
      ))}
    </>
  );
}

export default ChannelDetail

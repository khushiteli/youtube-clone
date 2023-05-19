import React, { useEffect, useState } from "react";
import { VideoCard } from "./";
import { FetchChannels, FetchChannelVideos } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);
  const id = useParams();

  // channels?part=snippet&id=UCmXmlB4-HJytD7wek0Uo97A
  useEffect(() => {
    FetchChannels(id.id).then((data) => {
      setChannel(data.items);
      console.log(data);
    });

    FetchChannelVideos(id.id).then((data) => {
      setVideos(data.items);
      console.log(data);
    });
  }, [id.id]);
  return (
    <>
      <div className="channel-section">
        <div className="channel-bg"></div>
        {channel.map((item, key) => (
          <div className="feed-video channel-card">
            <img
              src={item?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              key={key}
              alt=""
              className="channel-logo"
            />
            <p className="channel-title">{item?.snippet?.title}</p>
            <p className="channel-description">
              {item?.snippet?.description.slice(0, 180)}
            </p>
            <p className="channel-subscribers">
              {parseInt(item?.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </p>
          </div>
        ))}
        <div className="channel-videos">
          {videos.map((item, key) => (
            <div className="feed-video">
              {item.id.videoId && <VideoCard video={item} key={key} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChannelDetail;

import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails }) => {
  return (
    <>
      <Link to={`channel/${channelDetails?.id?.channelId}`}>
        <div className="w-[360px] flex flex-col items-center">
          <img
            src={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt=""
            className="h-[180px] w-[180px] rounded-full"
          />
          <p className="text-white">{channelDetails?.snippet?.title}</p>
          {channelDetails?.statistics?.subscriberCount && (
            <p>
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </p>
          )}
        </div>
      </Link>
    </>
  );
};

export default ChannelCard;

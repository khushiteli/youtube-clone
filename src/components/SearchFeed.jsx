import React, { useEffect, useState } from "react";
import { VideoCard, ChannelCard } from "./";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideo] = useState([]);
  const searchTerm = useParams();
  useEffect(() => {
    console.log(searchTerm);
    FetchFromAPI(`search?part=snippet&q=${searchTerm.searchTerm}`).then((data) =>
      setVideo(data.items)
    );
  }, [searchTerm]);
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center content-center">
        {videos.map((item, key) => (
          <div className="w-[30%] hover:scale-110 transition duration-200 ease-out">
            {item.id.videoId && <VideoCard video={item} key={key} />}
            {item.id.channelId && (
              <ChannelCard channelDetails={item} key={key} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchFeed;


{/* <div className="flex flex-wrap justify-center items-center content-center"></div> */}
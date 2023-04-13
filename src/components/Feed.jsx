import React, { useEffect, useState } from 'react'
import { SideBar, VideoCard , ChannelCard } from './'
import { FetchFromAPI } from '../utils/FetchFromAPI';

const Feed = () => {
   const [selectedCategories , setSelectedCategories] = useState('New');
   const [videos , setVideo ] = useState([]);

    useEffect(()=>{
      FetchFromAPI(`search?part=snippet&q=${selectedCategories}`)
      .then((data) => setVideo(data.items))
    },[selectedCategories])
  return (
    <>
      <div className="w-[20vw] bg-[#000] h-full flex flex-col gap-3 md:flex-row">
        <SideBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className='w-[80vw] flex items-end'>
          <h2 className="text-[40px]">
            <span className="text-red-500 font-bold">{selectedCategories}</span>{" "}
            Video
          </h2>
          {/* <Videos videos = {videos}/> */}
          <div className="flex flex-wrap justify-center items-center content-center">
            {videos.map((item, key) => (
              <div>
                {item.id.videoId && <VideoCard video={item} key={key} />}
                {item.id.channelId && <ChannelCard channelDetails={item} key={key} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed

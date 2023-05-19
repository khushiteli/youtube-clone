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
      <div className="feed-section">
        <div className='mb-5 overflow-y-auto h-[87vh] cursor-pointer'>
          <SideBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="feed-right-section">
          <h2 className="video-heading">
            <span className="categorie-heading">{selectedCategories}</span>{" "}
            Video
          </h2>
          {/* <Videos videos = {videos}/> */}
          <div className="feed-videos-section">
            {videos.map((item, key) => (
              <div className="feed-video" key={key}>
                {item.id.videoId && <VideoCard video={item} key={key} />}
                {item.id.channelId && (
                  <ChannelCard channelDetails={item} key={key} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed

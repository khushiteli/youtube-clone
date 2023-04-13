import React, { useEffect } from 'react'
import { VideoCard } from './'

const Videos = ({videos}) => {
  
  useEffect(()=>{
    console.log("I am in videos");
    console.log(videos)
  },[])

  const arr = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <div>
        {videos.map((items, index) => {
          <div key={index}>
            <VideoCard video={items} />
          </div>;
        })}
      </div>
    </>
  );
}

export default Videos

import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos } from "../modules/videoManager";
import { getAllWithComments } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

//   const getVideos = () => {
//     getAllVideos().then(videos => setVideos(videos));
//   };

//   useEffect(() => {
//     getVideos();
//   }, []);

  const getVideosWithComments = () => {
      getAllWithComments().then(videos => setVideos(videos));
    };
  
    useEffect(() => {
      getVideosWithComments();
    }, []);
    
  return (
    <div className="container">
      <div className="row justify-content-center">
        {videos && videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};


export default VideoList;
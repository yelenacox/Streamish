import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllWithComments, videoSearch } from "../modules/videoManager";

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
  
    
    const searchVideos = (event) => {;
        videoSearch(event.target.value).then(video => setVideos(video));
    };
    
    useEffect(() => {
      getVideosWithComments();
    }, []);

  return (
    <div className="container">
    <div className="row justify-content-center">
      <input type="" placeholder="Search by title" onChange={searchVideos}/>
  
      {
        (videos.length > 0 && videos!==null) ?
        videos.map((video) => (
          <Video video={video} key={video.id} />
        ))
        : <h2>No Result Found</h2>
      }
      </div></div>
  );
};


export default VideoList;
import React from 'react';
import './video-detail.css'

const VideoDetail = props => {

  if (!props.videos) 
    return null;

  let videoId = props.videos.id.videoId,
    url = `https://youtube.com/embed/${videoId}`;
// /width={850} height={479}
   // Channel Title:  props.videos.snippet.channelTitle
  return (
    <div className="video-detail">
     <div className="video-detail-wrapper">
      <iframe src={url} title={props.videos.title} className="video-player"></iframe> 
      <h4 className="video-title">{props.videos.snippet.title}</h4>
      <small>{props.videos.snippet.description}</small>
      </div>
      {props.children}
    </div>
  );
};

export default VideoDetail;
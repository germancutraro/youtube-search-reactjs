import React from 'react';
import './video_list.css';

const VideoListItem = props => {
  const videoData= {
    title: props.snippet.title,
    img: props.snippet.thumbnails.default.url
  }

  return (
    <div className="list-group-item">
      <li className="list-item" onClick={() => props.onVideoSelect(props)}>
        <img src={videoData.img} alt={videoData.title} className="thumbnail"/>
        <span className="video-list-title">{videoData.title}</span>
      </li>
    </div>
  )
};

export default VideoListItem;
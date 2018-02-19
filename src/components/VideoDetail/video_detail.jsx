import React from "react";
import "./video-detail.css";

const VideoDetail = props => {
  if (!props.videos) return null;

  let videoId = props.videos.id.videoId,
    url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="video-detail-wrapper">
        <iframe src={url} title={props.videos.title} className="video-player" />
        <h4 className="main-video-title">{props.videos.snippet.title}</h4>
        <small className="main-video-channelTitle">
          {props.videos.snippet.channelTitle}
        </small>
        <br />
        <small className="main-video-description">
          {props.videos.snippet.description}
        </small>
      </div>
      {props.children}
    </div>
  );
};

export default VideoDetail;

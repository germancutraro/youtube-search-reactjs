import React from 'react';
import VideoItem from './VideoItem';
// styles
import { ListContainer } from './videoStyles';

function VideoList({ videos, onVideoSelect }) {
  const list = videos.map(video => (
    <VideoItem key={video.etag} onVideoSelect={onVideoSelect} {...video} />
  ));
  return <ListContainer>{list}</ListContainer>;
}

export default React.memo(VideoList);

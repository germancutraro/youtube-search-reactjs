import React from 'react';
import VideoItem from './VideoItem';
// styles
import { ListContainer } from './videoStyles';

function VideoList({ videos, handleSelectVideo }) {
  const list = videos.map(video => (
    <VideoItem
      key={video.etag}
      handleSelectVideo={handleSelectVideo}
      {...video}
    />
  ));
  return <ListContainer>{list}</ListContainer>;
}

export default React.memo(VideoList);

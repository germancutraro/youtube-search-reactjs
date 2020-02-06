import React from 'react';
import {
  Item,
  ItemWrapper,
  ItemTitle,
  ItemChannel,
  Thumbnail
} from './videoStyles';

const VideoListItem = props => {
  const videoData = {
    title: props.snippet.title,
    img: props.snippet.thumbnails.default.url,
    channel: props.snippet.channelTitle
  };
  return (
    <Item onClick={() => props.onVideoSelect(props)}>
      <Thumbnail src={videoData.img} alt={videoData.title} />
      <ItemWrapper>
        <ItemTitle>{videoData.title}</ItemTitle>
        <ItemChannel>{videoData.channel}</ItemChannel>
      </ItemWrapper>
    </Item>
  );
};

export default React.memo(VideoListItem);

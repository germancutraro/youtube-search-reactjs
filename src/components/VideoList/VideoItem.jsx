import React from 'react';
import {
  Item,
  ItemWrapper,
  ItemTitle,
  ItemChannel,
  Thumbnail
} from './videoStyles';

const VideoListItem = props => {
  const { title, thumbnails, channelTitle } = props.snippet;

  return (
    <Item onClick={() => props.handleSelectVideo(props)}>
      <Thumbnail src={thumbnails.default.url} alt={title} />
      <ItemWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemChannel>{channelTitle}</ItemChannel>
      </ItemWrapper>
    </Item>
  );
};

export default React.memo(VideoListItem);

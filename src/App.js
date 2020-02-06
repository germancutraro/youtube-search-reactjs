import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Nav from './components/Nav/Nav';
// styles
import { Container } from './appStyles.js';
// Personal Key, it would be hidden for you. Get One!
import API_KEY from './key';

function App() {
  const [videos, setVideos] = useState(null),
    [selectedVideo, setSelectVideo] = useState();

  const handleSearch = term =>
    YTSearch({ key: API_KEY, term }, videos => {
      setVideos(videos);
      setSelectVideo(videos[0]);
    });

  useEffect(() => {
    handleSearch('Guns and roses');
  }, []);

  return (
    <Container>
      <Nav>
        <SearchBar handleSearch={handleSearch} />
      </Nav>
      <VideoDetail videos={selectedVideo}>
        <VideoList
          videos={videos}
          onVideoSelect={selectedVideo => setSelectVideo(selectedVideo)}
        />
      </VideoDetail>
    </Container>
  );
}

export default App;

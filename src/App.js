import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/SearchBar/search_bar';
import VideoList from './components/VideoList/video_list';
import VideoDetail from './components/VideoDetail/video_detail';
import Nav from './components/Nav/Nav';
import './App.css';
// Personal Key, it would be hidden for you. Get One!
import API_KEY from './key';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.searchVideoHandler('Guns and roses'); // for default will be guns and roses :>
  }

  searchVideoHandler = term => YTSearch({key: API_KEY, term}, videos => this.setState({videos, selectedVideo: videos[0]}));

  render() {
    return (
      <div className="App">
        <Nav> 
          <SearchBar onSearchVideos={ _.debounce(this.searchVideoHandler, 433) } />
        </Nav>
        <VideoDetail videos={this.state.selectedVideo} > 
          <VideoList 
            videos={this.state.videos} 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          /> 
        </VideoDetail>
      </div>
    );
  }
}

export default App;

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDZbB1AmbxkrS2zAmO29SPE5f6HwU46kgc';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('peugeot 207')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},
      (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        });
      }
    )
  }
  render() {
    const videoSearch  = _.debounce(term => this.videoSearch(term), 300);
    return(
      <div>
        <SearchBar onSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoClick={(video) => this.setState({selectedVideo:video})}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

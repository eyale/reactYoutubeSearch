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

    YTSearch(
      {
        key: API_KEY,
        term: 'peugeot 207 tuning'
      },
      (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]
        });
      }
    )
  }
  render() {
    return(
      <div>
        <SearchBar />
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

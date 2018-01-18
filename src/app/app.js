import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import styles from './style.css';
const API_KEY = 'AIzaSyAhaOuEWwcEkSjIaFw3IamnzBZLLdzTark';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedvideo: null
        };
        this.videoSearch('coding')
    }
    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedvideo: videos[0]});

        });
    }
    render() {
        const videoSearch =_.debounce((term)=>{this.videoSearch(term)},600); 

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>

                <VideoDetail video={this.state.selectedvideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedvideo => this.setState({selectedvideo})}/>

            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'))
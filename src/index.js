//import React from 'react';
const React = require("react"); // both are valid ways to import
const ReactDOM = require("react-dom"); // used to inject React components to DOM
//const SearchBar = require("./components/search_bar.js"); // doesn't work! WHY?
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YTSearch = require("youtube-api-search");

const API_KEY = "AIzaSyBSvoOrN5v_3oYtaJpm9KoNOMeFvOjpjeE";

// create component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
             videos : [],
            selectedVideo : null    
        };
        const self = this;

        YTSearch({
            key: API_KEY,
            term: 'crazy kittens'
        }, videos => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos} />
            </div>
        );
    }
}


// inject into DOM
ReactDOM.render(<App></App>, document.querySelector('.container'));
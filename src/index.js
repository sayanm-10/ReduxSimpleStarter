//import React from 'react';
const React = require("react"); // both are valid ways to import
const ReactDOM = require("react-dom"); // used to inject React components to DOM
//const SearchBar = require("./components/search_bar.js"); // doesn't work! WHY?
import SearchBar from './components/search_bar';
const YTSearch = require("youtube-api-search");
const API_KEY = "AIzaSyBSvoOrN5v_3oYtaJpm9KoNOMeFvOjpjeE";

YTSearch({
    key: API_KEY,
    term: 'crazy kittens'
}, function(data) {
    console.log(data);
});

// create component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// inject into DOM
ReactDOM.render(<App></App>, document.querySelector('.container'));
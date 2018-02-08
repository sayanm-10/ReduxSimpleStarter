import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    /*
        Must have a render method
        that returns JSX
    */
    render() {
        return (
            <div className="search-bar">
                <input value = {this.state.term} onChange = { event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
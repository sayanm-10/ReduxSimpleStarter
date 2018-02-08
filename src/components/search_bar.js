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
                <input value = {this.state.term} onChange = { event => this.setState({ term : event.target.value }) } />
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value) // captures text box value
    // }
}

export default SearchBar;
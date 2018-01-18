import React from 'react';
export default class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            term: 'Search Videos'
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input className="form-control"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }
    onInputChange(term){
this.setState({term});
this.props.onSearchTermChange(term);
    }

}

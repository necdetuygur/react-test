import React, { Component } from 'react';

class SearchBar extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mt-4 mb-4">
                    <div className="col-12">
                        <input
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control"
                            placeholder="Seach a movie"
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchBar;

import React, { Component } from 'react';

class MovieList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.movies.map((movie) => (
                    <div className="col-lg-3" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(event) => this.props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h2>{movie.rating}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MovieList;

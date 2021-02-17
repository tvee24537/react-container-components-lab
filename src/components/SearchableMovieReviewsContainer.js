import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMoviewReviewsContainer extends React.Component {
    state = { searchTerm: '', reviews: [] }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="input">Search Reviews: </label>
                    <input 
                        type="text" 
                        id="input" 
                        onChange={this.onInputChange} 
                        value={this.state.searchTerm}
                    />
                    <button>Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    
    onFormSubmit = (event) => {
        event.preventDefault()

        return fetch(URL + this.state.searchTerm)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results }))
            .catch(error => alert(error.message))
    }
}

export default SearchableMoviewReviewsContainer;
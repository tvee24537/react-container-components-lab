// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    
    const reviews = props.reviews.map(review => {
        return (
            <div className="review" key={review.headline}>
                <h4>
                    <a href={review.link.url}>{review.headline}</a> 
                </h4>
                <span>{review.byline}</span> 
                <blockquote>{review.summary_short}</blockquote>
            </div>
        )
    })

    return (
        <div className="review-list">
            {reviews}
        </div>
    )
}

export default MovieReviews;
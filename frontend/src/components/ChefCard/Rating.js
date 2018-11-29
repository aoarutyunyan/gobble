import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Rating extends Component {
  constructor() {
    super();
     
    this.state = {
      rating: 1,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return(
      <div>
        <h2>Rating: { rating }</h2>
        <StarRatingComponent
          name="Rating"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

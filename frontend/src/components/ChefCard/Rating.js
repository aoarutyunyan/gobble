import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends Component {
  constructor(props) {
    super(props);
   
    this.state = { rating: 0 }; 
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return(
      <div>
        <StarRatingComponent
          name="Rating"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}
export default Rating;

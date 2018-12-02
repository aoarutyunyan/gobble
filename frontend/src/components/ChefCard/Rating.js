import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import { putData } from '../../lib/assetsUtils';
class Rating extends Component {
  constructor(props) {
    super(props);
   
    this.state = { rating: 0 }; 
  }

  onStarClick = (nextValue, prevValue, name) => {
    const { user, chefId } = this.props;

    this.setState({ rating: nextValue });
    user.outgoingReviews.push({ rating: nextValue, subject_id: chefId });
    putData(`http://localhost:4000/users/reviews/${user.id}`, { reviews: user.outgoingReviews });
  }

  render() {
    const { rating } = this.state;
    const { currentRating } = this.props;

    return(
      <div>
        <StarRatingComponent
          name="Rating"
          starCount={5}
          value={rating || currentRating || 0}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

Rating.propTypes = {
  currentRating: PropTypes.number,
};

export default Rating;

import ChefDishes from './ChefDishes';
import { connect } from 'react-redux';
import { updateChefDishes } from '../../redux/chefDishes/action';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateChefDishes: (dishes) => {
    dispatch(updateChefDishes(dishes));
  },
});

const view = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChefDishes);

export default view;

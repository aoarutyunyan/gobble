import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import StyledBtn from '../../components/StyledBtn';
import { Link } from 'react-router-dom';

const Heading = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  color: #242729;
  width: 50em;
`;

const ListView = styled.div`
  margin-bottom: 200px;
`;

const tags = [
  { label: 'Barbecue', value: 1 },
  { label: 'Christmas', value: 2 },
  { label: 'Fish', value: 3 },
  { label: 'Salads', value: 4 },
  { label: 'Thanksgiving', value: 5 },
];

const SubmitBtn = styled(StyledBtn)`
  width: 200px;
  margin-top: 1em;
`;

class ChefDishes extends React.Component {
  
  handleChange = (dishes) => {
    this.props.updateChefDishes(dishes);
  }

  render() {
    return(
      <ListView>
        <Heading>

          <div>
            <h1>Select Your Speciality Dishes</h1>

            <Options>
              <Select options={tags} isMulti={true} onChange={this.handleChange} />
            </Options>

            <Link to="/users">
              <SubmitBtn theme="dark"> <span>Submit</span> </SubmitBtn>
            </Link>

          </div>
          
        </Heading>
      </ListView>
    );
  }
};

ChefDishes.propTypes = {
  updateChefDishes: PropTypes.func,
};

export default ChefDishes;

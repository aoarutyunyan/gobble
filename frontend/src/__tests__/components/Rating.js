import React from 'react';
import Rating from '../../components/ChefCard/Rating';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <Rating />,
);

describe('Rating', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Rating />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<Rating />);
  });

});

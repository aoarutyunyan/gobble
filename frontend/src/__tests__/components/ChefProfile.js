import React from 'react';
import ChefProfile from '../../routes/ChefProfile/ChefProfile';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <ChefProfile />,
);

describe('ChefProfile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <ChefProfile />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<ChefProfile />);
  });

});

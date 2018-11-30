import React from 'react';
import ChefCard from '../../components/ChefCard/ChefCard';
import { shallow, render } from 'enzyme';

let wrapper = shallow(
  <ChefCard />,
);

describe('ChefCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <ChefCard />,
    );
  });

  it('Chef card should contain rating', () => {
    expect(wrapper.find('Rating').length).toBe(1);
  });

  it('Renders without crashing', () => {
    shallow(<ChefCard />);
  });

});

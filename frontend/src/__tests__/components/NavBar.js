import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <NavBar />,
);

describe('NavBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <NavBar />,
    );
  });

  it('Chef link should  not be seen if not logged in', () => {
    expect(wrapper.find('Chefs').length).toBe(0);
  });

  it('Renders without crashing', () => {
    shallow(<NavBar />);
  });

});

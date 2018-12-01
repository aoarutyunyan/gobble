import React from 'react';
import Home from '../../routes/Home/Home';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <Home />,
);

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Home />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<Home />);
  });

});

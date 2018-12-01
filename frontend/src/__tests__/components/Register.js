import React from 'react';
import Register from '../../routes/Register/Register';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <Register />,
);

describe('Register', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Register />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<Register />);
  });

});

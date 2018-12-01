import React from 'react';
import Login from '../../routes/Login/Login';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <Login />,
);

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Login />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<Login />);
  });

});

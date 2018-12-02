import React from 'react';
import Bookings from '../../routes/Bookings';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <Bookings />,
);

describe('Bookings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <Bookings />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<Bookings />);
  });

});

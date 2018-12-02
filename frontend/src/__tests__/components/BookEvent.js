import React from 'react';
import BookEvent from '../../routes/BookEvent';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <BookEvent />,
);

describe('BookEvent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <BookEvent />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<BookEvent />);
  });

});

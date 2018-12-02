import React from 'react';
import AddTags from '../../routes/AddTags/AddTags';
import { shallow } from 'enzyme';

let wrapper = shallow(
  <AddTags />,
);

describe('AddTags', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddTags />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<AddTags />);
  });

});

import React from 'react';
import StyledBtn from '../../components/StyledBtn/StyledBtn';
import { shallow, render } from 'enzyme';

let wrapper = shallow(
  <StyledBtn />,
);

describe('StyledBtn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <StyledBtn />,
    );
  });

  it('Renders without crashing', () => {
    shallow(<StyledBtn />);
  });

  it('Renders with theme without crashing', () => {
    shallow(<StyledBtn theme="pink" />);
  });

});

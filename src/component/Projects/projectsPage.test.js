import React from 'react';
import { shallow } from 'enzyme';
import Gallerypage from './projects';

describe('it show gallery page content', () => {
  it('should match snapshot', () => {
    const component = shallow(<Gallerypage />);
    expect(component).toMatchSnapshot();
    const find = component.find('Gallerybody');
    expect(find).toHaveLength(1);
  });
});

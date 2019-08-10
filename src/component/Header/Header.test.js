import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import Header from './Header';
import Menuitem from './Menuitems';

describe('it should render page header', () => {
  it('should render <Menuitems /> for header items', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
    expect(component.find(Menuitem).length).toEqual(1);
  });
  it('should pass callback from child', () => {
    const handlecallbackchild = jest.fn();
    const wrapper = shallow(
      <Header handlecallbackchild={handlecallbackchild} />
    );
    wrapper.find('Menuitems').prop('handlecallbackchild')(
      'http://localhost:3000/'
    );
    expect(handlecallbackchild.callCount).toEqual(0);
  });
});

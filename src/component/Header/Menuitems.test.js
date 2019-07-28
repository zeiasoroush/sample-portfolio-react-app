import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menuitems from './Menuitems';

const clickhandlecallbackchild = jest.fn();
describe('<menuitem />', () => {
  it('it render Header', () => {
    const childcomponent = shallow(
      <Menuitems listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]} />
    );
    expect(childcomponent).toMatchSnapshot();
  });
  it('set active tab in header', () => {
    const wrapper = shallow(
      <Menuitems
        listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]}
        onclick={clickhandlecallbackchild}
      />
    );
    const spy = jest.spyOn(wrapper.instance(), 'handleClick');
    const parent = jest.mock('./Header', () => () => 'Header');
    wrapper
      .find('Link')
      .simulate('click', { currentTarget: { href: 'http://localhost:3000/' } });
    expect(parent.prototype.handleClick).to.equal(1);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
});

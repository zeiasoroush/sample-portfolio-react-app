import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menuitems from './Menuitems';

describe('<menuitem />', () => {
  it('it render Header', () => {
    const childcomponent = shallow(
      <Menuitems listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]} />
    );
    expect(childcomponent).toMatchSnapshot();
  });
  it('specify active tab in header onclick event ', () => {
    let mockfn = jest.fn();
    Menuitems.prototype.handleClick = mockfn;
    const wrapper = shallow(
      <Menuitems
        listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]}
        onclick={mockfn}
      />
    );
    const spy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper
      .find('Link')
      .simulate('click', { currentTarget: { href: 'http://localhost:3000/' } });
    expect(mockfn).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state()).toEqual({
      isactiveId: 1,
      location: 'http://localhost:3000/'
    });

    spy.mockClear();
  });
  /*  it('set actrive tab classname to active', () => {
    const component = shallow(
      <Menuitems listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]} />
    );
    const spy = jest.spyOn(component.instance(), 'isActive');
    component.find('Link').simulate('isActive');
    expect(spy).toEqual('ui-tabs-active');
  }); */
});

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menuitems from './Menuitems';

describe('<menuitem />', () => {
  let mockfn = jest.fn();
  it('it render Header', () => {
    const childcomponent = shallow(
      <Menuitems listcontent={[{ id: 1, link: '/', name: 'HOMEPAGE' }]} />
    );
    expect(childcomponent).toMatchSnapshot();
  });
  it('specify active tab in header onclick event ', () => {
    Menuitems.prototype.handleClick = mockfn;
    const wrapper = shallow(
      <Menuitems
        listcontent={[{ id: 2, link: '/AboutUs', name: 'ABOUT US' }]}
        onclick={mockfn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('"handleClick" to have been called ', () => {
    const props = {
      listItem: [
        {
          id: 1,
          link: '/',
          name: 'HOMEPAGE'
        },
        {
          id: 2,
          link: '/AboutUs',
          name: 'ABOUT US'
        },
        {
          id: 3,
          link: '/Gallery',
          name: 'OUR GALLERY'
        },
        {
          id: 4,
          link: '/ContactUs',
          name: 'CONTACT US'
        }
      ]
    };
    const handleClick = jest.fn();
    let wrapper = shallow(
      <Menuitems listcontent={props.listItem} onClick={handleClick} />
    );
    expect(wrapper).toHaveLength(1);
    expect(handleClick).not.toHaveBeenCalled();

    const spy = jest.spyOn(Menuitems.prototype, 'handleClick');
    for (let index = 0; index < 4; index++) {
      const item = props.listItem[index];
      wrapper
        .find('Link')
        .at(index)
        .simulate('Click', {
          target: {
            isactiveId: item.id,
            location: item.link
          }
        });
      wrapper.setState({
        isactiveId: item.id,
        location: item.link
      });
      expect(spy).toHaveBeenCalled();
      wrapper.update().state();
      console.log(item);
      expect(wrapper.state().isactiveId);
    }
  });
});

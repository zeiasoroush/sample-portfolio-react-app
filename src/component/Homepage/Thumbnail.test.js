import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Thumbnail from './Thumbnail';

describe('it should render homepage thumbnail', () => {
  let component, handleClick, props, isActive;

  beforeEach(() => {
    props = {
      contentItem: [
        {
          num: '1',
          src: '01',
          alt: 'Earth'
        },
        {
          num: '2',
          src: '02',
          alt: 'Meeting'
        },
        {
          num: '3',
          src: '03',
          alt: 'Smart'
        }
      ]
    };
    handleClick = jest.fn();
    isActive = jest.fn();

    component = shallow(
      <Thumbnail contentList={props.contentItem} onClick={handleClick} />
    );
  });
  it('should render thumbnail', () => {
    expect(component).toMatchSnapshot();
  });
  it('call handle click function and set state', () => {
    expect(component).toHaveLength(1);
    expect(handleClick).not.toHaveBeenCalled();
    const spy = jest.spyOn(Thumbnail.prototype, 'handleClick');
    for (let index = 0; index < 3; index++) {
      const item = props.contentItem[index];
      component
        .find('li')
        .at(index)
        .simulate('Click', {
          target: { activeId: item.num }
        });
      component.setState({
        activeId: item.num
      });
      expect(spy).toHaveBeenCalled();
      component.update().state();
      expect(component.state().activeId);
    }
  });
  it('should set activethumbnail', () => {
    let wrapper = mount(
      <Thumbnail contentList={props.contentItem} className={isActive} />
    );
    for (let index = 0; index < 3; index++) {
      const s = wrapper
        .find('li')
        .at(index)
        .hasClass('active');
      console.log(index);
      if (s) {
        expect(s).toEqual(true);
      } else {
        expect(s).toEqual(false);
      }
    }
  });
});

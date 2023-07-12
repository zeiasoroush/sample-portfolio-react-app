import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Fullbg from './Fullbg';
describe('it should render homepage thumbnail', () => {
  let component, props, isActiveImg;

  beforeEach(() => {
    props = {
      contentItem: [
        {
          num: 1,
          active: true,
          color: '#000',
          title: 'PASSION',
          first: 'IT\'s All about you',
          second: 'Keep going'
        },
        {
          num: 2,
          title: 'Latest ',
          color: '#000',
          first: 'Latest Design',
          second: 'Meaning'
        },
        {
          num: 3,
          title: 'Your Update',
          color: '#fff',
          first: 'Smart',
          second: 'Devices'
        }
      ]
    };

    isActiveImg = jest.fn();

    component = shallow(
      <Fullbg contentList={props.contentItem} className={isActiveImg} />
    );
  });
  it('should render fullbg', () => {
    expect(component).toMatchSnapshot();
  });

  it('should set active background', () => {
    let wrapper = mount(
      <Fullbg contentList={props.contentItem} className={isActiveImg} />
    );
    for (let index = 0; index < 3; index++) {
      const s = wrapper
        .find('li')
        .at(index)
        .hasClass('active');

      if (s) {
        expect(s).toEqual(true);
      } else {
        expect(s).toEqual(false);
      }
    }
  });
});

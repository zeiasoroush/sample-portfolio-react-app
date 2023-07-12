import React from 'react';
import { shallow, mount } from 'enzyme';
import Gallerybody from './Gallerybody';

describe('it should render gallery page content', () => {
  let component, find, props;
  beforeEach(() => {
    props = {
      gallerycontent: [
        {
          id: 1,
          src: require('../../assets/images/item-01.jpg'),
          alt: 'item1',
          h4: 'Donec non sagittis',
          h6: '$25.00'
        },
        {
          id: 2,
          src: require('../../assets/images/item-02.jpg'),
          alt: 'item2',
          h4: 'Nulla a pharetra',
          h6: '$35.00'
        },
        {
          id: 3,
          src: require('../../assets/images/item-03.jpg'),
          alt: 'item3',
          h4: 'Aliquam convallis',
          h6: '$45.00'
        },
        {
          id: 4,
          src: require('../../assets/images/item-04.jpg'),
          alt: 'item4',
          h4: 'Vivamus vittae #4',
          h6: '$55.00'
        },
        {
          id: 5,
          src: require('../../assets/images/item-05.jpg'),
          alt: 'item5',
          h4: 'Vivamus vittae #6',
          h6: '$65.00'
        },
        {
          id: 6,
          src: require('../../assets/images/item-06.jpg'),
          alt: 'item6',
          h4: 'Vivamus vittae #8',
          h6: '$75.00'
        }
      ]
    };
    component = shallow(<Gallerybody contentBody={props.gallerycontent} />);
  });
  it('should render content', () => {
    expect(component).toMatchSnapshot();
    find = component.find('a');
    expect(find).toHaveLength(6);
  });
});

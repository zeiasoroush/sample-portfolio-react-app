import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const component = shallow(<App debug />);
  expect(component).toMatchSnapshot();
});

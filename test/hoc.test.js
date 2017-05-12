import React from 'react';
import {mount} from 'enzyme';
// import ReactTestUtils from 'react-dom/test-utils';
import TestComponent from './TestComponent';

const createTouchEventObject = ({x = 0, y = 0}) => ({
  touches: [{clientX: x, clientY: y}],
});

test('<BlockAuto /> (все данные)', () => {
  const component = mount(<TestComponent />);

  component.simulate('touchStart', createTouchEventObject());
  console.log(component);

  // global.document.dispatchEvent(new Event('mousedown'));
  // ReactTestUtils.Simulate.click(wrapper.find('.root').node); // кликаем - открываем

  it('renders the component', () => {
    expect(component).toHaveLength(1);
  });
});

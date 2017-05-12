import React from 'react';
import swipeable from '../src/index';

const DIRECTION_UP = 1;
const DIRECTION_DOWN = 2;
const DIRECTION_LEFT = 3;
const DIRECTION_RIGHT = 4;

class TestComponent extends React.Component {
  state = {
    isSwipeStarted: false,
    isSwiping:      false,
    swipeDirection: null,
    delta:          {},
  }

  swipeStart() {
    this.setState({isSwipeStarted: true});
  }

  swiping(e, delta) {
    this.setState({isSwiping: true, delta});
  }

  swipingLeft(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_LEFT,
      delta,
    });
  }

  swipingRight(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_RIGHT,
      delta,
    });
  }

  swipingUp(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_UP,
      delta,
    });
  }

  swipingDown(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_DOWN,
      delta,
    });
  }

  swipedLeft(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_LEFT,
      delta,
      isSwiping:      false,
    });
  }

  swipedRight(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_RIGHT,
      delta,
      isSwiping:      false,
    });
  }

  swipedUp(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_UP,
      delta,
      isSwiping:      false,
    });
  }

  swipedDown(e, delta) {
    this.setState({
      swipeDirection: DIRECTION_DOWN,
      delta,
      isSwiping:      false,
    });
  }

  render() {
    return <div className="root">test</div>;
  }
}

export default swipeable(TestComponent);

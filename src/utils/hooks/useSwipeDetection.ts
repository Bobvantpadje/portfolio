import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const DIRECTION = {
  left: 'left',
  right: 'right',
  up: 'up',
  down: 'down'
};

export const useSwipeDetection = () => {
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);
  const firstTouchPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleTouchStart = (evt: TouchEvent) => {
      const firstTouch = evt.touches[0];
      firstTouchPosition.current = { x: firstTouch.clientX, y: firstTouch.clientY };
    };

    const handleTouchMove = (evt: TouchEvent) => {
      if (!firstTouchPosition.current.x || !firstTouchPosition.current.y) {
        return;
      }
      const { xDiff, yDiff } = getPositionDifference(evt, firstTouchPosition.current);
      setSwipeDirection(getSwipeDirection(xDiff, yDiff));
      resetFirstTouchPosition(firstTouchPosition);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return swipeDirection;
};

const getPositionDifference = (evt: TouchEvent, firstTouchPosition: { x: number; y: number }) => {
  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = firstTouchPosition.x - xUp;
  const yDiff = firstTouchPosition.y - yUp;
  return { xDiff, yDiff };
};

const getSwipeDirection = (xDiff: number, yDiff: number) => {
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      return DIRECTION.left;
    } else {
      return DIRECTION.right;
    }
  } else {
    if (yDiff > 0) {
      return DIRECTION.up;
    } else {
      return DIRECTION.down;
    }
  }
};
const resetFirstTouchPosition = (firstTouchPosition: MutableRefObject<{ x: number; y: number }>) => {
  firstTouchPosition.current = { x: 0, y: 0 };
};

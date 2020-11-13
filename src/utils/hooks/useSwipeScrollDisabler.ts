import { useEffect } from 'react';

export const useSwipeScrollDisabler = () => {
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      e.preventDefault();
    };

    window.addEventListener('touchmove', preventDefault, { passive: false });
    return () => {
      window.removeEventListener('touchmove', preventDefault);
    };
  }, []);
};

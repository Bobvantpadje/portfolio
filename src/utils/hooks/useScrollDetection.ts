import { useEffect, useState } from 'react';

export const useScrollDetection = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const setDirectionByScroll = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      if (e.deltaY > 0) setScrollDirection('down');
      if (e.deltaY < 0) setScrollDirection('up');
    };
    window.addEventListener('wheel', setDirectionByScroll);
    return () => {
      window.removeEventListener('wheel', setDirectionByScroll);
    };
  }, []);
  return scrollDirection;
};

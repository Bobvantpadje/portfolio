import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useScrollDetection } from './useScrollDetection';
import { useSwipeDetection } from './useSwipeDetection';

type props = {
  up?: string;
  down?: string;
};
export const useRouteByScrollDirection = ({ up, down }: props) => {
  const Router = useRouter();
  const scrollDirection = useScrollDetection();
  const swipeDirection = useSwipeDetection();

  useEffect(() => {
    if ((scrollDirection === 'up' || swipeDirection === 'down') && up) Router.push(up);
    if ((scrollDirection === 'down' || swipeDirection === 'up') && down) Router.push(down);
  }, [scrollDirection, swipeDirection]);
};

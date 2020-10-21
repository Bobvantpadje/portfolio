import { useState } from 'react';
import { useRouteChangeListener } from './useRouteChangeListener';

export const useNextRoute = () => {
  const [nextRoute, setNextRoute] = useState('');
  useRouteChangeListener(setNextRoute, 'routeChangeStart');
  return nextRoute;
};

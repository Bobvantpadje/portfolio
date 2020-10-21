import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export const useRouteChangeListener = (fn: (route: string) => void, event = 'routeChangeComplete') => {
  const router = useRouter();
  useEffect(() => {
    router.events.on(event, fn);
    return () => {
      router.events.off(event, fn);
    };
  }, []);
};

import { NextRouter, useRouter } from 'next/dist/client/router';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouteChangeListener } from 'utils/hooks/useRouteChangeListener';

type ContextValue = string[];
export const HistoryContext = React.createContext<ContextValue>(['']);
export const useHistoryContext = () => useContext(HistoryContext);

export const HistoryContextProvider: React.FC = ({ children }) => {
  const [history, setHistory] = useState(() => ['']);
  useRouteChangeListener((route: string) => setHistory((history) => [...history, route]));

  // setInitialRoute
  useEffect(() => {
    setHistory([window.location.pathname]);
  }, []);

  return <HistoryContext.Provider value={history}>{children}</HistoryContext.Provider>;
};

// export const useRouteChangeListener = (fn: (route: string) => void, event = 'routeChangeComplete') => {
//   const router = useRouter();
//   useEffect(() => {
//     router.events.on(event, fn);
//     return () => {
//       router.events.off(event, fn);
//     };
//   }, []);
// };

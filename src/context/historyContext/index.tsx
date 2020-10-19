import { NextRouter, useRouter } from 'next/dist/client/router';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

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

const useRouteChangeListener = (pushHistory: (route: string) => void) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pushHistory);
    return () => {
      router.events.off('routeChangeComplete', pushHistory);
    };
  }, []);
};

import { NextRouter, useRouter } from 'next/dist/client/router';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

type ContextValue = { history: string[]; pushHistory: (route: string) => void };
export const HistoryContext = React.createContext<ContextValue>({ history: [''], pushHistory: () => {} });
export const useHistoryContext = () => useContext(HistoryContext);

// const useHistoryContext = useContext(MyContext1);
const setInitialRoute = (setHistory: React.Dispatch<React.SetStateAction<string[]>>) => setHistory([window.location.pathname]);
const useRouteChangeListener = (pushHistory: (route: string) => void) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pushHistory);
    return () => {
      router.events.off('routeChangeComplete', pushHistory);
    };
  }, []);
};

export const HistoryContextProvider: React.FC = ({ children }) => {
  const [history, setHistory] = useState(() => ['']);
  const pushHistory = useCallback((route: string) => {
    setHistory((history) => [...history, route]);
  }, []);
  useRouteChangeListener(pushHistory);

  // setInitialRoute
  useEffect(() => {
    setInitialRoute(setHistory);
    // setHistory([window.location.pathname]);
  }, []);

  useEffect(() => {});

  const contextValue = useMemo(() => ({ history, pushHistory }), [history]);

  return <HistoryContext.Provider value={contextValue}>{children}</HistoryContext.Provider>;
};

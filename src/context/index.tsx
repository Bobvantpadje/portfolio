import React, { useCallback, useMemo, useState } from 'react';

type ContextValue = { history: string[]; pushHistory: (route: string) => void };
export const MyContext1 = React.createContext<ContextValue>({ history: [''], pushHistory: (route) => {} });

export const HistoryContext: React.FC<any> = ({ children }) => {
  const [history, setHistory] = useState(['/']);

  const pushHistory = useCallback((route: string) => {
    setHistory((history) => [...history, route]);
  }, []);

  const contextValue = useMemo(() => ({ history, pushHistory }), [history]);

  return <MyContext1.Provider value={contextValue}>{children}</MyContext1.Provider>;
};

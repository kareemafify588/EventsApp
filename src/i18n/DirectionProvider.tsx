// src/i18n/DirectionProvider.tsx
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { I18nManager } from 'react-native';
import { applyDirection, detectLocaleRTL } from './direction';

type DirectionContextValue = {
  isRTL: boolean;
  setRTL: (rtl: boolean) => void;
  toggleRTL: () => void;
};

const DirectionContext = createContext<DirectionContextValue>({
  isRTL: I18nManager.isRTL,
  setRTL: () => { },
  toggleRTL: () => { },
});

export const DirectionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Auto-detect once on first run; if already set, this returns current state
  const initial = I18nManager.isRTL ?? detectLocaleRTL();
  const [isRTL, setIsRTL] = useState<boolean>(initial);

  const setRTL = useCallback((rtl: boolean) => {
    setIsRTL(rtl);
    applyDirection(rtl, true); // restarts app to fully apply
  }, []);

  const toggleRTL = useCallback(() => setRTL(!isRTL), [isRTL, setRTL]);

  const value = useMemo(() => ({ isRTL, setRTL, toggleRTL }), [isRTL, setRTL, toggleRTL]);

  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>;
};

export const useDirection = () => useContext(DirectionContext);

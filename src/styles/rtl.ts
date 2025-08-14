// src/styles/rtl.ts
import { I18nManager } from 'react-native';

export const isRTL = () => I18nManager.isRTL;

export const logicalRow = () => ({
  flexDirection: isRTL() ? 'row-reverse' : 'row',
});

export const textAlignLogical = () => ({
  textAlign: isRTL() ? ('right' as const) : ('left' as const),
});

export const writingDir = () => ({
  writingDirection: isRTL() ? ('rtl' as const) : ('ltr' as const),
});

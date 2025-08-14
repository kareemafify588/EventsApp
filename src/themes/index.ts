// theme.ts
import { Theme as NavigationTheme } from '@react-navigation/native';

export type AppTheme = NavigationTheme & {
  colors: NavigationTheme['colors'] & {
    primary: string;
    secondary: string;
  };
  typography: {
    heading: { fontSize: number; fontWeight: string };
    body: { fontSize: number; fontWeight: string };
  };
};

export const lightTheme: AppTheme = {
  dark: false,
  colors: {
    primary: '#210e74',
    secondary: '#FDF5AA',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#7A7A73',
    notification: '#FFCC00',
  },
  fonts: {
    regular: { fontFamily: 'System', fontWeight: '400' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    heavy: { fontFamily: 'System', fontWeight: '900' },
  },
  typography: {
    heading: { fontSize: 20, fontWeight: 'bold' },
    body: { fontSize: 16, fontWeight: '400' },
  },
};

export const darkTheme: AppTheme = {
  dark: true,
  colors: {
    primary: '#FFCC00',
    secondary: '#FFFFFF',
    background: '#000000',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#444444',
    notification: '#FFCC00',
  },
  fonts: {
    regular: { fontFamily: 'System', fontWeight: '400' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    heavy: { fontFamily: 'System', fontWeight: '900' },
  },
  typography: {
    heading: { fontSize: 20, fontWeight: 'bold' },
    body: { fontSize: 16, fontWeight: '400' },
  },
};

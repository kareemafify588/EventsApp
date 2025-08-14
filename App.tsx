import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/themes/ThemeContext';
import AppWrapper from './src/themes/AppWrapper';
import { DirectionProvider, useDirection } from './src/i18n/DirectionProvider';

export default function App() {
  return (
    <DirectionProvider>
      <ThemeProvider>
        <AppWrapper>
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </AppWrapper>
      </ThemeProvider>
    </DirectionProvider>
  );
}

// AuthStyles.ts
import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../themes';

export const createAuthStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      fontWeight: '700',
      color: theme.colors.text,
    },
  });

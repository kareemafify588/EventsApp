import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../themes';

export const createProfileStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.background, // instead of hardcoded #fff
    },
    label: {
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.primary, // text color from theme
    },
    input: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.colors.border || '#ccc',
      padding: 10,
      borderRadius: 8,
      backgroundColor: theme.colors.background || '#f0f0f0',
      color: theme.colors.text, // ensures input text matches theme
    },
  });

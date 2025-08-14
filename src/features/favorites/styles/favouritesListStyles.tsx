import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../themes';

export const createFavouritesStyles = (theme: AppTheme) =>
  StyleSheet.create({
    row: {
      padding: 12,
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

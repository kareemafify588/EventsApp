import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../themes';
import { isRTL } from '../../../styles/rtl';

export const createEventsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    card: {
      borderRadius: 8,
      marginBottom: 12,
      backgroundColor: theme.colors.card,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 12,
      color: theme.colors.primary,
      alignSelf: 'flex-start'
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardImage: {
      width: '100%',
      height: 160,
      borderRadius: 16,
      alignSelf: 'flex-start'

    },
    search: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
      textAlign: isRTL() ? 'right' : 'left'
    },
  });

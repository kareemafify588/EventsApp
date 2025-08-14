import { StyleSheet } from 'react-native';
import { AppTheme } from '../../../themes';

export const createWventDetailsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      paddingBottom: 40,
      backgroundColor: theme.colors.background,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '100%',
      height: 220,
      borderRadius: 12,
      marginBottom: 16
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      flex: 1,
      marginRight: 10,
      color: theme.colors.text,
    },
    date: {
      fontSize: 16,
      color: theme.colors.border,
      marginVertical: 8
    },
    description: {
      fontSize: 16,
      lineHeight: 22,
      marginVertical: 12,
      color: theme.colors.text
    },
    venue: {
      marginTop: 20,
      backgroundColor: theme.colors.card,
      padding: 12,
      borderRadius: 8
    },
    venueLabel: {
      fontWeight: 'bold',
      marginBottom: 4,
      color: theme.colors.text
    },
    venueText: {
      fontSize: 14,
      color: theme.colors.text
    },
  });

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import { AppTheme } from '../../themes';
import { useThemeContext } from '../../themes/ThemeContext';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  loading?: boolean;
}

export default function Button({ title, onPress, style, loading }: Props) {
  const { theme } = useThemeContext();
  const styles = createButtonStyles(theme);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      {loading ? <ActivityIndicator color={theme.colors.secondary} /> : <Text style={styles.txt}>{title}</Text>}
    </TouchableOpacity>
  );
}

export const createButtonStyles = (theme: AppTheme) =>
  StyleSheet.create({
    btn: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    txt: {
      color: theme.colors.secondary,
      fontWeight: '600',
    },
  });

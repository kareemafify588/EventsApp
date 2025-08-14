import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function Input({ placeholder, value, onChangeText, secureTextEntry }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
});

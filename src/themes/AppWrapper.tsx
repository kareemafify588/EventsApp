import React from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
// const isRTL = I18nManager.isRTL;
const isRTL = true;
export default function AppWrapper({ children }: { children: React.ReactNode }) {

  return (
    <View style={[styles.container, isRTL && styles.rtl]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  rtl: { direction: 'rtl' }, // affects text, flex row order
});

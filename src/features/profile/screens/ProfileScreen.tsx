// ProfileScreen.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../auth/store/authSlice';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../app/store';
import Button from '../../../shared/components/Button';
import { useThemeContext } from '../../../themes/ThemeContext';
import { createProfileStyles } from '../styles/ProfileStyles';
import { useDirection } from '../../../i18n/DirectionProvider';

export default function ProfileScreen() {
  const { toggleRTL } = useDirection();
  const { theme } = useThemeContext();
  const styles = createProfileStyles(theme);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user } = useSelector((state: RootState) => state.auth || {});

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' as never }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID</Text>
      <TextInput style={styles.input} value={user?.uid} editable={false} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={user?.email} editable={false} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <Button style={{ flex: 1 }} title="Logout" onPress={handleLogout} />
        <View style={{ width: 20 }} />
        <Button style={{ flex: 1 }} title='Change language' onPress={toggleRTL} />
      </View>
    </View>
  );
}

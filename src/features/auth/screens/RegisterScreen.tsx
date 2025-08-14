import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { firebaseRegister } from '../services/firebaseAuth';
import { useAppDispatch } from '../../../app/hooks';
import { setUser, setLoading, setError } from '../store/authSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useThemeContext } from '../../../themes/ThemeContext';
import { createAuthStyles } from '../styles/AuthStyles';


export default function RegisterScreen() {
  const { theme } = useThemeContext();
  const styles = createAuthStyles(theme);
  const [email, setEmail] = useState('kareem.afify.95@gmail.com');
  const [password, setPassword] = useState('123456');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { loading } = useSelector((state: RootState) => state.auth);


  const handleRegister = async () => {
    dispatch(setLoading(true));
    try {
      const res = await firebaseRegister(email, password);
      dispatch(setUser({ uid: res.user.uid, email: res.user.email ?? undefined }));
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }], // This must match the name in your AppNavigator
      });
    } catch (err: any) {
      dispatch(setError(err.message));
      Alert.alert('Register failed', err.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} loading={loading} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} style={{ marginTop: 12, backgroundColor: '#444' }} />
    </View>
  );
}


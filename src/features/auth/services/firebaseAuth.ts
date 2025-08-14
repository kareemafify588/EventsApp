import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export const firebaseLogin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const firebaseRegister = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const firebaseLogout = () => signOut(auth);

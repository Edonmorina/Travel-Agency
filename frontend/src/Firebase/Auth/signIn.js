import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginEmailPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }
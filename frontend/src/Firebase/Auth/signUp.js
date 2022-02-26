import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
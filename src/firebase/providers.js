import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./";

const googleProvider = new GoogleAuthProvider();
export const singInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, uid, photoURL } = user;
    return { isOk: true, displayName, email, uid, photoURL };
  } catch (error) {
    const errorMessage = error.message;
    const errorCode = error.code;

    return { isOk: false, errorCode, errorMessage };
  }
};

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { photoURL, uid } = user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      isOk: true,
      email,
      displayName,
      password,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      isOk: false,
      errorMessage: error.message,
      errorCode: error.code,
    };
  }
};
export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { photoURL, uid, displayName } = user;
    return {
      isOk: true,
      email,
      displayName,
      password,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      isOk: false,
      errorMessage: error.message,
      errorCode: error.code,
    };
  }
};
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

import { checkingCredentials, login, logout } from "./authSlice";
import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  singInWithGoogle,
} from "../../firebase";
import { clearNotesLogout } from "../journal";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    console.log({ result });
    if (result.isOk == false) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await registerUserWithEmailAndPassword({
      email,
      password,
      displayName,
    });
    if (res.isOk == false) return dispatch(logout(res.errorMessage));
    dispatch(login(res));
  };
};
export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await loginWithEmailAndPassword({ email, password });
    if (res.isOk == false) return dispatch(logout(res.errorMessage));

    dispatch(login(res));
  };
};
export const startLogoutFirebase = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
    dispatch(clearNotesLogout());
  };
};

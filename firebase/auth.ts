/* Setting up Auth using the Firebase SDK. Here's a breakdown of what
each part is doing: */
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
} from 'node_modules/firebase/auth';

import { auth } from '@/firebase/config';

export const doCreateUserWithEmailAndPassword = async (
  username: string,
  email: string,
  password: string
) => {
  const { user }: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: username,
  });
};

export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = async () => {
  auth.signOut();
};

export const doPasswordReset = async (email: string) => {
  sendPasswordResetEmail(auth, email, { url: `${window.location.origin}/login` });
};

export const doPasswordChange = async (password: string) => {
  if (auth.currentUser) {
    await updatePassword(auth.currentUser, password);
  }
};

export const doSendEmailVerification = async () => {
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  }
};

export const getErrorMessage = (errorCode: string) => {
  let errorMessage: string = '';
  switch (errorCode) {
    case 'auth/invalid-email':
      errorMessage = 'Invalid email address.';
      break;
    case 'auth/user-disabled':
      errorMessage = 'Your account has been disabled.';
      break;
    case 'auth/user-not-found':
      errorMessage = 'User not found.';
      break;
    case 'auth/wrong-password':
      errorMessage = 'Invalid password.';
      break;
    case 'auth/invalid-login-credentials':
      errorMessage = 'Email or password is incorrect';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'Email is already in use. Please use a different email or login.';
      break;
    case 'auth/weak-password':
      errorMessage = 'Password should be at least 6 characters.';
      break;
    case 'auth/operation-not-allowed':
      errorMessage = 'This operation is not allowed. Please contact support.';
      break;
    case 'auth/too-many-requests':
      errorMessage = 'Too many requests. Please try again later.';
      break;
    case 'auth/requires-recent-login':
      errorMessage = 'Please re-authenticate and try again.';
      break;
    case 'auth/network-request-failed':
      errorMessage = 'Network error. Please check your internet connection and try again.';
      break;
    case 'auth/invalid-verification-code':
      errorMessage = 'The verification code is invalid. Please try again.';
      break;
    case 'auth/invalid-verification-id':
      errorMessage = 'The verification ID is invalid. Please try again.';
      break;
    case 'auth/credential-already-in-use':
      errorMessage = 'This credential is already associated with a different user account.';
      break;
    case 'auth/invalid-credential':
      errorMessage = 'The provided authentication credential is invalid. Please try again.';
      break;
    case 'auth/expired-action-code':
      errorMessage = 'The action code has expired. Please try again.';
      break;
    case 'auth/missing-email':
      errorMessage = 'Please provide an email address.';
      break;
    case 'auth/internal-error':
      errorMessage = 'An internal error occurred. Please try again later.';
      break;
    default:
      errorMessage = 'An error occurred during authentication.';
  }
  return errorMessage;
};

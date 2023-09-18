import { signInFormReducer } from '#features/sign-in-form/sign-in-form.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    signUpForm: signUpFormReducer,
    signInForm: signInFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

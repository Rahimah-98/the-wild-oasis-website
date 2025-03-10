'use server';

import { signOut, singIn } from './auth';

export async function signInAction() {
  await singIn('google', { redirectTo: '/account' });
}
export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

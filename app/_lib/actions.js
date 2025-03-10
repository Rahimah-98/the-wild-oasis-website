'use server';


export async function signInAction() {
    await singIn("google", {redirectTo: "/account"})
}
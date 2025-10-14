import { supabase } from './supabaseClient'

// Cadastro com e-mail/senha
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password })
  return { data, error }
}

// Login com e-mail/senha
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

// Logout
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Login com Google (para usar futuramente)
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
  return { data, error }
}

'use client'
import { useState } from 'react'
import { signIn } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'
import { PasswordInput } from '../../components/Input/PasswordInput'
import { TextInput } from '../../components/Input/TextInput'
import { PrimaryButton } from '../../components/Button/PrimaryButton'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    const { data, error } = await signIn(email, password)
    setIsLoading(false)
    if (error) setMessage(error.message)
    else setMessage('Login bem-sucedido!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative"
      style={{ background: 'linear-gradient(135deg, #cbe4ea 0%, #ead1cb 100%)' }}>

      {/* Main login card */}
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}>

          {/* Header section */}
          <div className="text-center pt-12 pb-8 px-8">
            {/* Logo */}
            <div className="inline-block"><Image src="/logo.png" alt="Nooly" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#000000' }}>
              Bem-vindo
            </h1>
            <p className="text-base" style={{ color: '#657275' }}>
              Entre na sua conta
            </p>
          </div>

          {/* Form section */}
          <div className="px-8 pb-10">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email input */}
              <TextInput
                label="Email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              {/* Password input */}
              <PasswordInput
                label="Senha"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />

              {/* Forgot password link */}
              <div className="text-right">
                <Link href="#" className="text-sm font-medium hover:underline transition-colors" style={{ color: '#657275' }}>
                  Esqueceu a senha?
                </Link>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <PrimaryButton
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Entrando..."
                >
                  Entrar
                </PrimaryButton>
              </div>

              {/* Message display */}
              {message && (
                <div
                  className="text-center p-3 rounded-xl text-sm"
                  style={{
                    backgroundColor: message.includes('sucedido') ? '#e8f5f7' : '#fef2f2',
                    color: message.includes('sucedido') ? '#0a6b7c' : '#991b1b'
                  }}
                >
                  {message}
                </div>
              )}
            </form>

            {/* Register link */}
            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: '#657275' }}>
                Ainda não tem uma conta?{' '}
                <Link
                  href="/register"
                  className="font-semibold hover:underline transition-colors"
                  style={{ color: '#000000' }}
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-8 text-center">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            Feito com amor e dedicação
          </p>
        </div>
      </div>
    </div>
  )
}

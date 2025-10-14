'use client'
import { useState } from 'react'
import { signUp } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'
import { PasswordInput } from '../components/Input/PasswordInput'
import { TextInput } from '../components/Input/TextInput'
import { SecondaryButton } from '../components/Button/SecondaryButton'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    const { data, error } = await signUp(email, password)
    setIsLoading(false)
    if (error) setMessage(error.message)
    else setMessage('Cadastro realizado! Verifique seu e-mail para confirmação.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 relative" 
         style={{ background: 'linear-gradient(135deg, #cbe4ea 0%, #ead1cb 100%)' }}>

      {/* Main register card - mobile-first width */}
      <div className="w-full max-w-sm sm:max-w-md relative">
        <div className="bg-white rounded-3xl overflow-hidden" 
             style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}>
          
          {/* Header section */}
          <div className="text-center pt-12 pb-8 px-8">
            {/* Icon illustration */}
            <div className="inline-block">
              <Image src="/logo.png" alt="Nooly" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#000000' }}>
              Criar Conta
            </h1>
            <p className="text-base" style={{ color: '#657275' }}>
              Junte-se à comunidade Nooly
            </p>
          </div>

          {/* Form section - mobile-optimized padding */}
          <div className="px-6 sm:px-8 pb-10">
            <form onSubmit={handleSignUp} className="space-y-5">
              {/* Email input - mobile-optimized */}
              <TextInput
                label="Email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              {/* Password input - mobile-optimized */}
              <PasswordInput
                label="Senha"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <p className="text-sm pl-1" style={{ color: '#657275' }}>
                A senha deve conter pelo menos 8 caracteres.
              </p>

              {/* Submit button - mobile-optimized touch target */}
              <div className="pt-2">
                <SecondaryButton
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Cadastrando..."
                >
                  Cadastrar
                </SecondaryButton>
              </div>

              {/* Message display */}
              {message && (
                <div 
                  className="text-center p-3 rounded-xl text-sm"
                  style={{ 
                    backgroundColor: message.includes('realizado') ? '#e8f5f7' : '#fef2f2',
                    color: message.includes('realizado') ? '#0a6b7c' : '#991b1b'
                  }}
                >
                  {message}
                </div>
              )}
            </form>

            {/* Login link - mobile-optimized */}
            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: '#657275' }}>
                Já tem uma conta?{' '}
                <Link 
                  href="/login" 
                  className="font-semibold hover:underline transition-colors touch-manipulation inline-block py-1"
                  style={{ color: '#000000' }}
                >
                  Entrar
                </Link> 
              </p>
            </div>
          </div>
        </div>

        {/* Footer text - responsive */}
        <div className="mt-8 text-center px-4">
          <p className="text-sm" style={{ color: '#9ca3af' }}>
            Melhorando o futuro artesanal
          </p>
        </div>
      </div>
    </div>
  )
}

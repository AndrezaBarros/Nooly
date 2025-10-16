'use client'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Loading from '@/components/Loading'

export default function TestPage() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('test').select('*')
        if (error) throw error
        console.log('Data:', data)
      } catch (err) {
        console.error('Erro Supabase:', err)
      }
    }
    testConnection()
  }, [])

  return <div>Teste Supabase 🔥 (veja console)
    <Loading/>
  </div>
}

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../../components/Button/PrimaryButton'
import { SecondaryButton } from '../../components/Button/SecondaryButton'

export default function UserTypeSelectionPage() {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const handleSelection = (userType: string) => {
    setSelectedType(userType)
  }

  const handleSubmit = () => {
    //TODO: Implement the logic to save the user type and redirect to the appropriate page
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative"
      style={{ background: 'linear-gradient(135deg, #cbe4ea 0%, #ead1cb 100%)' }}>

      {/* Main selection card */}
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}>

          {/* Header section */}
          <div className="text-center pt-12 pb-8 px-8">
            
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#000000' }}>
              Quem é você?
            </h1>
            <p className="text-base" style={{ color: '#657275' }}>
              Escolha como quer começar:
            </p>
          </div>

          {/* Selection section */}
          <div className="px-8 pb-10">
            <div className="space-y-4">
              {/* Cliente button */}
              <PrimaryButton
                onClick={() => handleSelection('cliente')}
              >
                Sou Cliente
              </PrimaryButton>

              {/* Artesã button */}
              <SecondaryButton
                onClick={() => handleSelection('artesa')}
              >
                Sou Artesã
              </SecondaryButton>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


import { createContext, useContext, useState } from 'react'

interface DemoModalContextValue {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null)

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </DemoModalContext.Provider>
  )
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext)
  if (!ctx) throw new Error('useDemoModal must be used inside DemoModalProvider')
  return ctx
}

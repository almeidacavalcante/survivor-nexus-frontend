'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface SurvivorsItem {
  productId: string
  quantity: number
}

interface SurvivorsContextType {
  items: SurvivorsItem[]
  addToSurvivors: (productId: string) => void
}

const SurvivorsContext = createContext({} as SurvivorsContextType)

export function SurvivorsProvider({ children }: { children: ReactNode }) {
  const [survivorInventory, setSurvivorInventory] = useState<SurvivorsItem[]>([])

  function addToSurvivors(productId: string) {
    setSurvivorInventory((state) => {
      const productInSurvivors = state.some((item) => item.productId === productId)

      if (productInSurvivors) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <SurvivorsContext.Provider value={{ items: survivorInventory, addToSurvivors }}>
      {children}
    </SurvivorsContext.Provider>
  )
}

export const useSurvivors = () => useContext(SurvivorsContext)

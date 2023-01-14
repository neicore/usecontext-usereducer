import { createContext } from 'react'

interface AppContextType {
  message: string
  auth: boolean
  setAuth: (auth: boolean) => void
}

const AppContext = createContext({} as AppContextType)
export default AppContext

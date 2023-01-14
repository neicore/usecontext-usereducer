import { ReactNode, useState } from 'react'
import AppContext from './app-context'

interface Props {
  children: ReactNode
}
const AppState = ({ children }: Props) => {
  const [auth, setAuth] = useState(false)
  
  return (
    <AppContext.Provider value={{ message: 'Hello, world', auth, setAuth }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppState

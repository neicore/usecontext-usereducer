import { useContext } from 'react'
import AppContext from '../context/app-context'

function Home() {
  const { message, auth, setAuth } = useContext(AppContext)
  return (
    <div>
      <h2>Home</h2>
      <h3>{message}</h3>
      <button onClick={() => setAuth(!auth)}>
        {auth ? 'logout' : 'login'}
      </button>
    </div>
  )
}

export default Home

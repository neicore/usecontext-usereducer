import { useContext } from 'react'
import AppContext from '../context/app-context'

function Dashboard() {
  const { auth } = useContext(AppContext)
  return (
    <div>
      <h2>{auth ? 'Welcome' : 'You are not logged in, go home to login'}</h2>
    </div>
  )
}

export default Dashboard

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/about'
import Dashboard from './components/dashboard'
import Home from './components/home'
import AppState from './context/AppState'
function App() {
  return (
    <div className="App">
      <h1>useContext Example</h1>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <AppState>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </AppState>
        </div>
      </Router>
    </div>
  )
}

export default App

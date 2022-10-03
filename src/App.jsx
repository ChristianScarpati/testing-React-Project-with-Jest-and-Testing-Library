import { useState } from 'react'
import LoginPage from "./auth/components/login-page/loginPage"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h2>asd</h2>
      <LoginPage />
    </div>
  )
}

export default App

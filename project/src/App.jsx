import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profilePic from '/linkedin-image.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={profilePic} className="logo" alt="Profile Pic" />
        </a>
      </div>
      <h1>Yash Jain</h1>
      <div className="card">
        <p>
          This is my portfolio website.
        </p>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DebounceScratch from "./debounceScratch";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <DebounceScratch />
      </div>
    </div>
  )
}

export default App

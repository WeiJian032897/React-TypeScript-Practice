import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Student')
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setName('Wei Jian Chee')}>
        Show my name
      </button>
      
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      
      <button onClick={() => setCount(0)}>
        Reset counter
      </button>
    </div>
  )
}

export default App
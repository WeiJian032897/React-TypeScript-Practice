import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [message, setMessage] = useState('Click a button!')
  const [count, setCount] = useState(0) 

  return (
    <div className="App">
      <h1>Learning Props</h1>
      <h2>{message}</h2>
      <p>Count: {count}</p>  {/* ← Add this to see the count */}

      <Button 
        text="Say Hello" 
        color="green" 
        onClick={() => setMessage('Hello! 👋')} 
      />

      <Button 
        text="Say Goodbye" 
        color="red" 
        onClick={() => setMessage('Goodbye! 👋')} 
      />

      <Button 
        text="Say Thanks" 
        color="blue" 
        onClick={() => setMessage('Thank you! 🙏')} 
      />

      <Button 
        text="Reset" 
        color="orange" 
        onClick={() => setMessage('Click a button!')} 
      />

      <Button 
        text="Change Both" 
        color="purple" 
        onClick={() => {
          setMessage('Both changed!')
          setCount(count + 1)
        }} 
      />
       
       <Button 
        text="Reset Count" 
        color="gray" 
        onClick={() => {
          setMessage('Reset The total number of count!')
          setCount(0)
        }} 
      />

    </div>
  )
}

export default App
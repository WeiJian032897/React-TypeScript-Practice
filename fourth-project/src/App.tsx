import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Load todos from localStorage on first load
  const [todos, setTodos] = useState<string[]>(() => { 
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : ['Learn React', 'Learn TypeScript']
  })
  
  const [inputValue, setInputValue] = useState('')
  const [lastSaved, setLastSaved] = useState('Never') 

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    const currentTime = new Date().toLocaleTimeString()
    setLastSaved(currentTime)
    console.log('Todos saved at:', currentTime)
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  const deleteTodo = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
  }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <h1>My Todo List (with Auto-Save!)</h1>
      
      {/* Last Saved Display */}
      <p style={{ 
        color: 'green', 
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '5px'
      }}>
        💾 Last saved: {lastSaved}
      </p>
      
      <p style={{ color: 'gray', fontSize: '14px', marginBottom: '20px' }}>
        Your todos are automatically saved! Try refreshing the page.
      </p>
      
      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {        // Allow adding todo with Enter key
            if (e.key === 'Enter') {
              addTodo()
            }
          }}
          placeholder="Enter a new todo"
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            marginRight: '10px'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Todo
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        maxWidth: '500px', 
        margin: '0 auto' 
      }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#9a1c9cff',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '18px' }}>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={{
                padding: '5px 15px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Empty State Message */}
      {todos.length === 0 && (
        <p style={{ 
          color: 'gray', 
          fontSize: '18px', 
          marginTop: '30px',
          fontStyle: 'italic'
        }}>
          No todos yet! Add one above 👆
        </p>
      )}

      {/* Total Count */}
      <p style={{ marginTop: '30px', color: 'gray' }}>
        Total todos: {todos.length}
      </p>

      {/* Clear All Button */}
      {todos.length > 0 && (
        <button
          onClick={clearAll}
          style={{
            padding: '10px 30px',
            fontSize: '16px',
            backgroundColor: 'darkred',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Clear All Todos
        </button>
      )}
    </div>
  )
}

export default App
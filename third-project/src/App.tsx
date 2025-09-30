import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    'Drink Water',
    'Eat Food',
    'Sleep Well',
  ])

  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  const deleteTodo = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
  }

  // NEW FUNCTION: Clear all todos
  const clearAll = () => {
    setTodos([]) // Clear the entire todo list
  }

  return (
    <div className="App">
      <h1>My Todo List Whole Life 🥵 </h1>

      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
              backgroundColor: '#472a96ff',
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

      {todos.length === 0 && (
        <p style={{ color: 'gray', fontSize: '18px', marginTop: '30px' }}>
          No todos yet! Add one above 👆
        </p>
      )}

      <p style={{ marginTop: '30px', color: 'gray' }}>
        Total todos: {todos.length}
      </p>

      {/* CONDITIONAL RENDERING: Only show button if there are todos */}
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
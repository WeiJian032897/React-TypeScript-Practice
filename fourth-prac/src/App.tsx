import { useState, useEffect } from 'react'
import './App.css'

interface Todo {
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : [
      { text: 'Learn React', completed: false },
      { text: 'Learn TypeScript', completed: false }
    ]
  })
  
  const [inputValue, setInputValue] = useState('')
  const [lastSaved, setLastSaved] = useState('Never')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    const currentTime = new Date().toLocaleString()
    setLastSaved(currentTime)
    console.log('Todos saved at:', currentTime)
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTodos = [...todos]
        updatedTodos[editingIndex].text = inputValue
        setTodos(updatedTodos)
        setEditingIndex(null)
      } else {
        setTodos([...todos, { text: inputValue, completed: false }])
      }
      setInputValue('')
    }
  }

  const deleteTodo = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
    if (editingIndex === indexToDelete) {
      setEditingIndex(null)
      setInputValue('')
    }
  }

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  const startEditing = (index: number) => {
    setInputValue(todos[index].text)
    setEditingIndex(index)
  }

  const cancelEdit = () => {
    setInputValue('')
    setEditingIndex(null)
  }

  const clearAll = () => {
    setTodos([])
    setEditingIndex(null)
    setInputValue('')
  }

  // Sort todos: incomplete first, completed last
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0
    return a.completed ? 1 : -1
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="App">
      <h1>My Advanced Todo List</h1>
      
      <p style={{ 
        color: 'green', 
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '5px'
      }}>
        💾 Last saved: {lastSaved}
      </p>
      
      <p style={{ color: 'gray', fontSize: '14px', marginBottom: '20px' }}>
        ✅ {completedCount} completed • 📝 {activeCount} active • 📋 {todos.length} total
      </p>
      
      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo()
            }
          }}
          placeholder={editingIndex !== null ? "Edit your todo" : "Enter a new todo"}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            marginRight: '10px',
            border: editingIndex !== null ? '2px solid orange' : '1px solid #ccc'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: editingIndex !== null ? 'orange' : 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '5px'
          }}
        >
          {editingIndex !== null ? 'Update Todo' : 'Add Todo'}
        </button>
        
        {editingIndex !== null && (
          <button
            onClick={cancelEdit}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {/* Todo List */}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        maxWidth: '650px', 
        margin: '0 auto' 
      }}>
        {sortedTodos.map((todo, originalIndex) => {
          // Find the original index in the unsorted array
          const index = todos.findIndex(t => t === todo)
          
          return (
            <li
              key={index}
              style={{
                padding: '15px',
                margin: '10px 0',
                backgroundColor: editingIndex === index 
                  ? '#fff3cd' 
                  : todo.completed 
                  ? '#d4edda' 
                  : '#f0f0f0',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: editingIndex === index ? '2px solid orange' : 'none',
                opacity: todo.completed ? 0.7 : 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '15px',
                    cursor: 'pointer'
                  }}
                />
                <span style={{ 
                  fontSize: '18px',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#6c757d' : 'black'
                }}>
                  {todo.text}
                </span>
              </div>
              <div>
                <button
                  onClick={() => startEditing(index)}
                  disabled={todo.completed}
                  style={{
                    padding: '5px 15px',
                    backgroundColor: todo.completed ? '#ccc' : 'orange',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: todo.completed ? 'not-allowed' : 'pointer',
                    marginRight: '5px'
                  }}
                >
                  Edit
                </button>
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
              </div>
            </li>
          )
        })}
      </ul>

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
            marginTop: '20px'
          }}
        >
          Clear All Todos
        </button>
      )}
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import './App.css'

interface User {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  picture: {
    large: string
  }
  location: {
    city: string
    country: string
  }
  login: {
    uuid: string
  }
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError('')
      
      const response = await fetch('https://randomuser.me/api/?results=10')
      const data = await response.json()
      
      setUsers(data.results)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch users')
      setLoading(false)
    }
  }

  const fetchMoreUsers = async () => {
    try {
      setError('')
      
      const response = await fetch('https://randomuser.me/api/?results=5')
      const data = await response.json()
      
      setUsers([...users, ...data.results])
    } catch (err) {
      setError('Failed to fetch more users')
    }
  }

  // Filter users based on search term
  const filteredUsers = users.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    const email = user.email.toLowerCase()
    const location = `${user.location.city} ${user.location.country}`.toLowerCase()
    const search = searchTerm.toLowerCase()
    
    return fullName.includes(search) || 
           email.includes(search) || 
           location.includes(search)
  })

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="App">
      <h1>Random User Directory</h1>
      <p style={{ color: 'gray', marginBottom: '30px' }}>
        Fetching real data from randomuser.me API
      </p>

      {/* Search Bar */}
      <div style={{ 
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search by name, email, or location..."
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            width: '400px',
            border: '2px solid #ddd',
            borderRadius: '25px',
            outline: 'none'
          }}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            style={{
              padding: '12px 20px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer'
            }}
          >
            ✕ Clear
          </button>
        )}
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <p style={{ 
          color: filteredUsers.length > 0 ? '#28a745' : '#dc3545',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          {filteredUsers.length > 0 
            ? `Found ${filteredUsers.length} user${filteredUsers.length === 1 ? '' : 's'}` 
            : 'No users found'}
        </p>
      )}

      {loading && (
        <div style={{ fontSize: '24px', margin: '50px' }}>
          <p>⏳ Loading users...</p>
        </div>
      )}

      {error && (
        <div style={{ color: 'red', margin: '20px' }}>
          <p>❌ {error}</p>
          <button 
            onClick={fetchUsers}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && users.length > 0 && (
        <>
          {!searchTerm && (
            <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '20px' }}>
              ✅ Loaded {users.length} users
            </p>
          )}

          {/* User Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {filteredUsers.map((user) => (
              <div
                key={user.login.uuid}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '15px',
                    border: '3px solid #007bff'
                  }}
                />
                <h3 style={{ margin: '10px 0', color: '#333' }}>
                  {user.name.first} {user.name.last}
                </h3>
                <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
                  📧 {user.email}
                </p>
                <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
                  📱 {user.phone}
                </p>
                <p style={{ color: '#666', fontSize: '14px', margin: '5px 0' }}>
                  📍 {user.location.city}, {user.location.country}
                </p>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredUsers.length === 0 && searchTerm && (
            <div style={{
              padding: '40px',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              margin: '20px auto',
              maxWidth: '500px'
            }}>
              <p style={{ fontSize: '48px', margin: '0' }}>🔍</p>
              <h3 style={{ color: '#666', margin: '10px 0' }}>No matches found</h3>
              <p style={{ color: '#999' }}>
                Try searching with a different keyword
              </p>
              <button
                onClick={clearSearch}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '15px'
                }}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ margin: '30px 0' }}>
            <button
              onClick={fetchUsers}
              style={{
                padding: '15px 30px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              🔄 Refresh All Users
            </button>

            <button
              onClick={fetchMoreUsers}
              style={{
                padding: '15px 30px',
                fontSize: '16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ➕ Load 5 More Users
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{
      padding: '80px 20px',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '120px',
        marginBottom: '20px'
      }}>
        😕
      </div>
      
      <h1 style={{
        fontSize: '72px',
        color: '#dc3545',
        margin: '0 0 20px 0'
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: '36px',
        color: '#333',
        marginBottom: '20px'
      }}>
        Page Not Found
      </h2>
      
      <p style={{
        fontSize: '18px',
        color: '#666',
        marginBottom: '40px',
        maxWidth: '500px'
      }}>
        Oops! The page you're looking for doesn't exist. 
        It might have been moved or deleted.
      </p>
      
      <Link 
        to="/"
        style={{
          padding: '15px 40px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        🏠 Go Back Home
      </Link>
      
      <div style={{ marginTop: '40px' }}>
        <p style={{ color: '#999', fontSize: '16px' }}>
          Or try these pages:
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          marginTop: '15px'
        }}>
          <Link 
            to="/about"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '16px'
            }}
          >
            About
          </Link>
          <Link 
            to="/projects"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '16px'
            }}
          >
            Projects
          </Link>
          <Link 
            to="/contact"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '16px'
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation Bar */}
        <nav style={{
          backgroundColor: '#007bff',
          padding: '20px 0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 40px'  // ← Changed from 20px to 40px
          }}>
            <h2 style={{ color: 'white', margin: 0, marginRight: '40px' }}>My Portfolio</h2>  

            <div style={{ display: 'flex', gap: '30px' }}></div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <NavLink
                to="/"
                end
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
                  transition: 'background-color 0.3s'
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
                  transition: 'background-color 0.3s'
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                About
              </NavLink>

              <NavLink
                to="/projects"
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
                  transition: 'background-color 0.3s'
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
                  transition: 'background-color 0.3s'
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.style.backgroundColor.includes('0.3')) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          textAlign: 'center',
          borderTop: '1px solid #ddd',
          marginTop: 'auto'
        }}>
          <p style={{ color: '#666', margin: 0 }}>
            © 2025 My Portfolio. Built with React & TypeScript ❤️
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
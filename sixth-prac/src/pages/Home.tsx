function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Welcome to My Portfolio! 👋
      </h1>
      <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
        Hi! I'm a React developer learning to build amazing web applications.
        Check out my projects and feel free to contact me!
      </p>
      <div style={{ marginTop: '40px' }}>
        <img 
          src="/profile.jpg"
          alt="Profile"
          style={{ 
            borderRadius: '50%', 
            width: '200px', 
            height: '200px',
            objectFit: 'cover',
            border: '4px solid #007bff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        />
      </div>
    </div>
  )
}

export default Home
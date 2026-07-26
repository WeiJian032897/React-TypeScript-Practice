function About() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'API Integration',
    'Git & GitHub'
  ]

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', marginBottom: '30px', color: '#333' }}>About Me 📖</h1>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ color: '#007bff' }}>My Story</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
          I'm an IT student passionate about web development. Currently learning React and TypeScript 
          to build modern, interactive web applications. I love solving problems and creating 
          user-friendly interfaces.
        </p>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Skills 💪</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontSize: '20px', 
                minWidth: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>✅</span>
              <span style={{ fontSize: '18px', color: '#333' }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
        <h2 style={{ color: '#007bff' }}>Education 🎓</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
          Currently pursuing a degree in Information Technology. 
          Learning modern web technologies and building real-world projects.
        </p>
      </div>
    </div>
  )
}

export default About
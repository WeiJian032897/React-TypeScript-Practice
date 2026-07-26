function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Todo List App',
      description: 'A full-featured todo app with add, edit, delete, and mark as complete functionality. Saves data to localStorage.',
      tech: ['React', 'TypeScript', 'localStorage']
    },
    {
      id: 2,
      title: 'Random User Directory',
      description: 'Fetches random users from an API and displays them with search functionality.',
      tech: ['React', 'TypeScript', 'API', 'fetch']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with multiple pages using React Router.',
      tech: ['React', 'TypeScript', 'React Router']
    }
  ]

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '42px', marginBottom: '30px', textAlign: 'center', color: '#333' }}>
        My Projects 🚀
      </h1>

      <div style={{ display: 'grid', gap: '30px' }}>
        {projects.map(project => (
          <div 
            key={project.id}
            style={{
              backgroundColor: '#f8f9fa',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ color: '#007bff', marginBottom: '15px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {project.tech.map(tech => (
                <span 
                  key={tech}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xblzoevl', {  // ← YOUR FORM ID!
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '42px', 
        marginBottom: '30px', 
        textAlign: 'center',
        color: '#333'
      }}>
        Contact Me 📬
      </h1>

      {status === 'success' && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '20px',
          border: '1px solid #c3e6cb'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
          <h2 style={{ margin: '0 0 10px 0' }}>Message Sent Successfully!</h2>
          <p style={{ margin: 0 }}>
            Thank you for contacting me! I'll get back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '20px',
          border: '1px solid #f5c6cb'
        }}>
          ❌ Oops! Something went wrong. Please try again or contact me directly.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            disabled={status === 'submitting'}
            placeholder="Your name"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box',
              backgroundColor: status === 'submitting' ? '#f5f5f5' : '#ffffff',
              color: '#333',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            disabled={status === 'submitting'}
            placeholder="your.email@example.com"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box',
              backgroundColor: status === 'submitting' ? '#f5f5f5' : '#ffffff',
              color: '#333',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Message *
          </label>
          <textarea
            name="message"
            required
            disabled={status === 'submitting'}
            rows={6}
            placeholder="Write your message here..."
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              boxSizing: 'border-box',
              resize: 'vertical',
              backgroundColor: status === 'submitting' ? '#f5f5f5' : '#ffffff',
              color: '#333',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{
            padding: '15px',
            fontSize: '18px',
            backgroundColor: status === 'submitting' ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {status === 'submitting' ? '⏳ Sending...' : 'Send Message 📨'}
        </button>
      </form>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Other Ways to Reach Me</h3>
        <p style={{ color: '#666', margin: '5px 0' }}>📧 Email: your.email@example.com</p>
        <p style={{ color: '#666', margin: '5px 0' }}>💼 LinkedIn: linkedin.com/in/yourprofile</p>
        <p style={{ color: '#666', margin: '5px 0' }}>🐙 GitHub: github.com/yourusername</p>
      </div>
    </div>
  )
}

export default Contact
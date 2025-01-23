import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:islam.guven@ozu.edu.tr?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setStatus('Email client opened!');
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section">
      <h2>Contact Me</h2>
      <form 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: 'var(--background-color)',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <div>
          <label 
            htmlFor="name"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--primary-color)'
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div>
          <label 
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--primary-color)'
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div>
          <label 
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--primary-color)'
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            ':hover': {
              backgroundColor: 'var(--secondary-color)'
            }
          }}
        >
          Send Message
        </button>
        {status && (
          <div style={{ 
            textAlign: 'center',
            color: 'var(--primary-color)'
          }}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;

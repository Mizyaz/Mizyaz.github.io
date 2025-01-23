const References = () => {
  const references = [
    {
      name: "Dr. Evsen Yanmaz",
      email: "evsen.yanmaz@ozyegin.edu.tr",
      title: "Associate Professor at Ozyegin University and Carnegie Mellon University graduate",
      description: "my master's thesis advisor"
    },
    {
      name: "Dr. H. Fatih Ugurdag",
      email: "fatih.ugurdag@ozyegin.edu.tr",
      title: "Dean of Engineering at Ozyegin University",
      description: "with extensive industry experience including NVIDIA"
    }
  ];

  return (
    <section className="section">
      <h2>References</h2>
      <div className="grid" style={{ gap: '1.5rem' }}>
        {references.map((ref, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1rem',
              backgroundColor: 'var(--background-color)',
              borderRadius: '6px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline'
            }}>
              <h3 style={{ 
                fontSize: '1.1rem',
                color: 'var(--primary-color)',
                margin: 0
              }}>
                {ref.name}
              </h3>
              <a 
                href={`mailto:${ref.email}`}
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--link-color)'
                }}
              >
                {ref.email}
              </a>
            </div>
            <div style={{ 
              fontSize: '0.95rem',
              color: 'var(--secondary-color)'
            }}>
              {ref.title}
            </div>
            <div style={{ 
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              {ref.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;

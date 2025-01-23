const Header = () => {
  const personalInfo = {
    name: "Islam Güven",
    email: "islam.guven@ozu.edu.tr",
    github: "mizyaz",
    linkedin: "islam-guven"
  };

  return (
    <header className="section">
      <h1>{personalInfo.name}</h1>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem',
        flexWrap: 'wrap',
        fontSize: '0.9rem',
        marginBottom: '2rem'
      }}>
        <a 
          href={`mailto:${personalInfo.email}`}
          style={{ 
            transition: 'color 0.3s ease',
            ':hover': { color: 'var(--primary-color)' }
          }}
        >
          {personalInfo.email}
        </a>
        <span>|</span>
        <a 
          href={`https://github.com/${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            transition: 'color 0.3s ease',
            ':hover': { color: 'var(--primary-color)' }
          }}
        >
          github/{personalInfo.github}
        </a>
        <span>|</span>
        <a 
          href={`https://linkedin.com/in/${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            transition: 'color 0.3s ease',
            ':hover': { color: 'var(--primary-color)' }
          }}
        >
          linkedin/{personalInfo.linkedin}
        </a>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <strong>Main Interests: </strong>
        Reinforcement Learning, Multi-Agent Systems, Time-Frequency Analysis, Wireless sensor networks
      </div>
    </header>
  );
};

export default Header;

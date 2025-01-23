const Publications = () => {
  const publications = [
    {
      title: "MULTI-UAV PATH PLANNING FOR JOINT COVERAGE AND CONNECTIVITY USING REINFORCEMENT LEARNING",
      type: "Thesis",
      authors: "İslam Güven",
      description: "Development of a search and rescue system using unmanned aerial vehicles (UAVs) enhanced by artificial intelligence and computer vision, designed for operation in disaster zones.",
      link: ""
    },
    {
      title: "ADAPTIVE MULTI-UAV COORDINATION FOR HETEROGENEOUS TARGET SEARCH AND CONNECT MISSIONS USING PROXIMAL POLICY OPTIMIZATION",
      type: "VTC 2025",
      authors: "İslam Güven, Evşen Yanmaz",
      status: "In Review",
      link: ""
    },
    {
      title: "Multi-objective Coverage and Connectivity Optimization for Multi-UAV Systems with Evolutionary Algorithms",
      journal: "Ad Hoc Networks 2024",
      authors: "Islam Guven, Evsen Yanmaz",
      link: "https://www.sciencedirect.com/science/article/pii/S1570870524001318?dgcid=rss_sd_all"
    },
    {
      title: "Maintaining Connectivity for Multi-UAV Multi Target Search Using Reinforcement Learning",
      conference: "ACM DIVANet 2023",
      authors: "Islam Guven, Evsen Yanmaz",
      link: "https://dl.acm.org/doi/10.1145/3616392.3623414"
    },
    {
      title: "Dynamic Multi-UAV Path Planning for Multi-Target Search and Connectivity",
      journal: "IEEE TVT 2023",
      authors: "Evsen Yanmaz, Hamid Majidi Balanji, Islam Guven",
      link: "https://ieeexplore.ieee.org/document/10433718"
    },
    {
      title: "Classifying LPI Radar Waveforms with Time Frequency Transformations Using Multi Stage CNN",
      conference: "IEEE IRS 2022",
      authors: "Islam Guven, Can Yagmur, Bahadir Karadas, Mehmet Parlak",
      link: "https://ieeexplore.ieee.org/document/9904993"
    },
    {
      title: "Blockchain, AI and IoT Empowered Swarm Drones for Agricultural Applications",
      conference: "IEEE GET Blockchain Forum 2022",
      authors: "Islam Guven, Mehmet Parlak",
      link: "https://ieeexplore.ieee.org/document/10087152"
    }
  ];

  return (
    <section className="section">
      <h2>Publications</h2>
      <div className="grid" style={{ gap: '1.5rem' }}>
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="publication-card"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--background-color)',
              borderLeft: '3px solid var(--primary-color)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderRadius: '0 4px 4px 0'
            }}
          >
            <h3 style={{ 
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              color: 'var(--primary-color)'
            }}>
              {pub.link ? (
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'inherit',
                    display: 'block',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <div style={{ 
              color: 'var(--secondary-color)',
              marginBottom: '0.5rem',
              fontSize: '0.9rem'
            }}>
              {pub.authors}
            </div>
            {pub.description && (
              <p style={{ 
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}>
                {pub.description}
              </p>
            )}
            <div style={{ 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--secondary-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{pub.journal || pub.conference || pub.type}</span>
              {pub.status && (
                <span style={{ 
                  backgroundColor: 'var(--border-color)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  {pub.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;

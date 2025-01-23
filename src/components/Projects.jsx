const Projects = () => {
  const projects = [
    {
      title: "Graph Anomaly Detection based on Spatio-Temporal neural networks",
      description: "Development of a hybrid-ChebsConv based graph neural network find anomalies in benchmark datasets such as Cora, surpassing the previous methods with a better precision and AUC score."
    },
    {
      title: "Hirarchical graph neural network architecture for multi-variate financial data",
      description: "Development of a hierarchical graph structure to combine sectoral relationships within different stock price data. The dataset is then analysed with isolation forests and anomaly detectors."
    },
    {
      title: "Portfolio risk analysis using reinforcement learning and time-frequency analysis",
      description: "A PPO-based portfolio analyser that gives optimal weights of a portfolio on selected dates. A baseline for a mixture of experts model for forecasting and high-frequency trading."
    }
  ];

  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid" style={{ gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card"
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--background-color)',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ 
              fontSize: '1.2rem',
              marginBottom: '1rem',
              color: 'var(--primary-color)'
            }}>
              {project.title}
            </h3>
            <p style={{ 
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: 'var(--text-color)'
            }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

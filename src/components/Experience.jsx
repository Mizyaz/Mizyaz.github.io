const Experience = () => {
  const experiences = [
    {
      company: "OZYEGIN UNIVERSITY",
      position: "Research Assistant",
      location: "Istanbul, Turkey",
      period: "Jan 2022 – present",
      responsibilities: [
        "Worked Under the TUBITAK 1001 Project: Deep learning and computer vision assisted multi-UAV search and rescue system",
        "Worked on the multi-objective optimization problems for multi-UAV search and rescue missions",
        "Designed and implemented a multi-UAV path planner using different multi-objective elitist evolutionary genetic algorithms with novel mutation, crossover, sampling, and repair operators",
        "Implemented analysis and visualization tools for animating and evaluating multi-UAV mission plans using NumPy, Pandas, and Matplotlib",
        "Worked on dynamic path planning of multi-UAV systems using Multi-Agent Reinforcement Learning. Implemented various MARL models using PPO and SAC",
        "Implemented Gymnasium environments for multi-UAV search and rescue missions with multiple targets and uncertain mission zones",
        "Implemented networking protocols for adhoc networks in NS3",
        "Integrated neuro-evolutionary architectures for multi-objective optimization",
        "Worked under the supervision of Dr. Evsen Yanmaz Adam"
      ]
    },
    {
      company: "Ozyegin University",
      position: "Research Assistant",
      location: "Istanbul, Turkey",
      period: "Sep 2021 – Jun 2023",
      responsibilities: [
        "Analyzed LPI radar waveforms and EEG signals using Time-Frequency analysis techniques",
        "Designed CNN models and implemented transfer learning for various CNN architectures using MATLAB",
        "Modeled a Computer Vision, Blockchain and Time-Frequency analysis assisted UAV swarm network architecture for precision agriculture applications",
        "Worked under the supervision of Dr. Mehmet Parlak"
      ]
    }
  ];

  return (
    <section className="section">
      <h2>Work Experience</h2>
      <div className="grid" style={{ gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ margin: 0 }}>{exp.company}</h3>
              <span style={{ color: 'var(--secondary-color)' }}>
                {exp.location} | {exp.period}
              </span>
            </div>
            <div style={{ 
              color: 'var(--secondary-color)',
              marginBottom: '1rem'
            }}>
              {exp.position}
            </div>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

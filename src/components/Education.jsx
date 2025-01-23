const Education = () => {
  const education = [
    {
      degree: "MSc. Electrical and Electronics Engineering",
      school: "Ozyegin University",
      location: "Istanbul, Turkey",
      period: "Sep 2023-Jan 2025",
      details: [
        "Teacher Assistant: EE 341 Fundamentals of Communication Systems - Lab sessions on software defined radio design",
        "Teacher Assistant: EE 204 Electromagnetics - Weekly recitation sessions on electromagnetics",
        "Thesis Topic: Multi-UAV Path Planning For Joint Coverage and Connectivity Using Reinforcement Learning"
      ]
    },
    {
      degree: "BSc. Electrical and Electronics Engineering",
      school: "Ozyegin University",
      location: "Istanbul, Turkey",
      period: "Jun 2023",
      details: [
        "GPA: 3.94",
        "Minor: Computer Science",
        "Faculty Valedictorian",
        "Merit-based 100% Tuition scholarship"
      ]
    }
  ];

  return (
    <section className="section">
      <h2>Education</h2>
      <div className="grid" style={{ gap: '2rem' }}>
        {education.map((edu, index) => (
          <div key={index}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ margin: 0 }}>{edu.school}</h3>
              <span style={{ color: 'var(--secondary-color)' }}>
                {edu.location} | {edu.period}
              </span>
            </div>
            <div style={{ 
              color: 'var(--secondary-color)',
              marginBottom: '0.5rem'
            }}>
              {edu.degree}
            </div>
            <ul style={{ 
              listStyle: 'none',
              paddingLeft: '0'
            }}>
              {edu.details.map((detail, idx) => (
                <li key={idx} style={{ marginBottom: '0.25rem' }}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

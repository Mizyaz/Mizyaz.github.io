const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: "Python, MATLAB, Java, C++, verilog, javascript"
    },
    {
      category: "Reinforcement learning",
      skills: "Gymnasium, Ray RLLIB, TF-Agents, Stable-baselines 3"
    },
    {
      category: "Deep learning",
      skills: "PyTorch, torch-Geometric, TensorFlow"
    },
    {
      category: "Optimization",
      skills: "Deap, GUROBI, PyMOO, Scipy, CPLEX"
    },
    {
      category: "Data Science",
      skills: "NumPy, Pandas, MatPlotLib, OpenCV, NetworkX"
    },
    {
      category: "General",
      skills: "LaTeX, openMC, React.js, Next.js"
    }
  ];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="grid" style={{ gap: '1rem' }}>
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'baseline',
              padding: '0.5rem',
              backgroundColor: 'var(--border-color)',
              borderRadius: '4px'
            }}
          >
            <div style={{ 
              minWidth: '180px',
              fontWeight: 'bold',
              color: 'var(--primary-color)'
            }}>
              {category.category}:
            </div>
            <div style={{ flex: 1 }}>
              {category.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

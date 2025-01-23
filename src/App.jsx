import './styles/global.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';
import References from './components/References';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Education />
        <Experience />
        <Skills />
        <Publications />
        <Projects />
        <References />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;

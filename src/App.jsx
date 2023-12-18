import styles from './App.module.css';
import Navbar  from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Skill from './components/Skills/Skills.jsx';
import Project from './components/Projects/Project.jsx';
import Contact from './components/Contact/Contact.jsx';
function App() {

  return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </div>
  )
}

export default App

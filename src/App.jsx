import './App.css'
import { Cover } from './components/cover/cover'
import { About } from './components/about/about'
import { NavBar } from './components/navBar/navBar'
import { Education } from './components/Education/education'
import { Experience } from './components/experience/exp'
import { Experience_ext } from './components/experience/exp_ext'
import { Projects } from './components/projects/projects'
import { Contact } from './components/contact/contact'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from 'react'
function App() {
  const components = [
    { component: <About />},
    { component: <Education />},
    { component: <Experience />},
    { component: <Experience_ext /> },
    { component: <Projects /> },
    { component: <Contact />}
];
useEffect(() => {
  window.location.href = "#";
}, []);
   
  return (
    <>
      <NavBar/>
      <Cover />
      {components.map(({ component }, index) => (
                <ScrollAnimation key={index} animateIn="fadeIn" delay={200}>
                    {component}
                </ScrollAnimation>
            ))}
    </>
  )
}

export default App

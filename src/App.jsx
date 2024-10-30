import './App.css'
import { Cover } from './components/cover/cover'
import { About } from './components/about/about'
import { NavBar } from './components/navBar/navBar'
import { Education } from './components/Education/education'
import { Experience } from './components/experience/exp'
import { Experience_ext } from './components/experience/exp_ext'
import { Projects } from './components/projects/projects'
import { Contact } from './components/contact/contact'
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

function App() {
  // const navigate = useNavigate();

  //   useEffect(() => {
  //     const isRefresh = window.history.state === null;

  //     if (isRefresh) {
  //         navigate('/'); // Redirect to home route
  //     }
  //   }, [navigate]);
  return (
    <>
      <NavBar/>
      <Cover/>
      <About/>
      <Education/>
      <Experience/>
      <Experience_ext/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App

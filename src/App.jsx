import './App.css'
import { Cover } from './components/cover/cover'
import { About } from './components/about/about'
import { NavBar } from './components/navBar/navBar'
import { Education } from './components/Education/education'
import { Experience } from './components/experience/exp'
import { Experience_ext } from './components/experience/exp_ext'

function App() {
  
  return (
    <>
      <NavBar/>
      <Cover/>
      <About/>
      <Education/>
      <Experience/>
      <Experience_ext/>
    </>
  )
}

export default App

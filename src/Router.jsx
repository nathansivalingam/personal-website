import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import { Navbar, StyledLink } from './styles/styledComponents';
import './App.css'

function Router() {

  return (
    <>
      <Navbar>
        <StyledLink to='/'>HomePage</StyledLink>&nbsp;|&nbsp;
        <StyledLink to='/interests'>Interests</StyledLink>&nbsp;|&nbsp;
        <StyledLink to='/projects'>Projects</StyledLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default Router

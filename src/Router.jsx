import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import HandGestureRobot from './pages/IndivProjects/HandGestureRobot';
import JSXGames from './pages/IndivProjects/JSXGames';
import PersonalWebsite from './pages/IndivProjects/PersonalWebsite';
import { Navbar, StyledLink } from './styles/styledComponents';
import './App.css'

function Router() {

  return (
    <>
      <Navbar>
        <StyledLink to='/'>Home</StyledLink>&nbsp;&nbsp;|&nbsp;&nbsp;
        <StyledLink to='/projects'>Projects</StyledLink>&nbsp;&nbsp;|&nbsp;&nbsp;
        <StyledLink to='/interests'>Interests</StyledLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/IndivProjects/HandGestureRobot" element={<HandGestureRobot />} />
        <Route path="/IndivProjects/JSXGames" element={<JSXGames />} />
        <Route path="/IndivProjects/PersonalWebsite" element={<PersonalWebsite />} />
      </Routes>
    </>
  )
}

export default Router

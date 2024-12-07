import { Routes, Route } from 'react-router-dom';
import { Navbar, StyledLink } from './styles/styledComponents';
import HomePage from './pages/HomePage'
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import HandGestureRobot from './pages/IndivProjects/HandGestureRobot';
import PersonalWebsite from './pages/IndivProjects/PersonalWebsite';
import JSXGames from './pages/IndivProjects/JSXGames';
import TicTacToe from './pages/IndivProjects/IndivJSXGames/TicTacToe';
import './App.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

function Router() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/aboutme');
  }, [])

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
        <Route path="/IndivProjects/IndivJSXGames/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </>
  )
}

export default Router

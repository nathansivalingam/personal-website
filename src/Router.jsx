import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Interests from './pages/Interests';
import Projects from './pages/Projects';

function Router() {

  return (
    <>
      <div>
        <div>
          <Link to='/'>HomePage</Link>&nbsp;|&nbsp;
          <Link to='/interests'>Interests</Link>&nbsp;|&nbsp;
          <Link to='/projects'>Projects</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default Router

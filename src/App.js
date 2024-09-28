import { Route, Routes, Link } from 'react-router-dom';

// CSS
import './App.css';

// Layout
import Navigation from './components/layout/Navigation';

// Pages
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

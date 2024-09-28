import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css';

// Layout
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Pages
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

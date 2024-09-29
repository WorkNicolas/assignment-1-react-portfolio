/**
 * @file App.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-09-28
 * @description Displays all the components, styles, and layouts of the webapp.
 * 
 * @returns {App}
 */
import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css';

// Layout
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
      <Navigation />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home';
import About from './component/about';
import Contact from './component/Contact'
import Services from "./component/Services"
import { Skills } from './component/skills';
import { Projects } from './component/projects';
import { Experience } from './component/experience';



// import Contact from './Contact';


function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
           <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
             <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

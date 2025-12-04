import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Houses from './pages/Houses';
import Public from './pages/Public';
import Renovation from './pages/Renovation';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="maisons" element={<Houses />} />
          <Route path="public" element={<Public />} />
          <Route path="renovation" element={<Renovation />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
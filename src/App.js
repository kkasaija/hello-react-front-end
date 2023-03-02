import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Root from './components/Root';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;

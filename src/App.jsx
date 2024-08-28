import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Front from './front';
import Haldi from './Haldi';
import Mehndi from './mehndi';
import Walima from './walima';
import Rsvp from './rsvp';
import './App.css'; // Import your CSS file for animations

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="diary-page"
        timeout={800} // Duration of the animation
      >
        <Routes location={location}>
          <Route path="/" element={<Front />} />
          <Route path="/haldi" element={<Haldi />} />
          <Route path="/mehndi" element={<Mehndi />} />
          <Route path="/walima" element={<Walima />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Food from './components/Food/Food';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

const componentMap = {
  Home: <Home />,
  Selections: <Food />,
  About: <About />,
  Contact: <Contact />,
};

const componentNames = Object.keys(componentMap);

function App() {
  return (
    <div
      style={{
        backgroundColor: "#e1e1d8",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const [currentComponent, setCurrentComponent] = useState('Home');
  const navigate = useNavigate();

  const handleClick = (nextComponent) => {
    setCurrentComponent(nextComponent);
    navigate(`/${nextComponent.toLowerCase()}`);
  };

  return (
    <div>
      <NavBar
        handleClick={handleClick}
        currentComponent={currentComponent}
        componentNames={componentNames}
      />
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/selections" element={<Food />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

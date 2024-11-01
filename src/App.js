import React from 'react';
import './App.css';
import Home from './components/Home';
import Food from './components/Food';
import About from './components/About';
import Contact from './components/Contact/Contact';

const componentNames = ['Home', 'Food', 'About', 'Contact']

const NavButton = ({ handleClick, componentName }) => {
  return (
    <p
      onClick={() => {
        handleClick(componentName)
      }} >
      {
        componentName
      }
    </p>
  )
}

function App() {
  const [currentComponent, setCurrentComponent] = React.useState('Home')

  const handleClick = (nextComponent) => {
    console.log(nextComponent)
    setCurrentComponent(nextComponent)
  }





  return (

    <div>
      <div className="topnav">
        {
          componentNames.map((componentName) => {
            return (<NavButton handleClick={handleClick} componentName={componentName} key={componentName} />)
          })
        }
      </div>
      <div className="App">
        {
          currentComponent === 'Home' && <Home />
        }
        {
          currentComponent === 'Food' && <Food />
        }
        {
          currentComponent === 'Contact' && <Contact />
        }
        {
          currentComponent === 'About' && <About />
        }
      </div>
    </div>
  );
}

export default App;

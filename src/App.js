import React from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Publisher from "./components/Publisher";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Publisher />
    </div>
  )
}

export default App
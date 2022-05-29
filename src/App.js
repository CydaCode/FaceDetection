import React from 'react';
import './App.css'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import UrlDetection from './components/UrlDetection/UrlDetection';


function App() {
  return(
    <div>
    <ParticlesBackground className = 'part'/>
     <div className='move'>
        <Navigation />
        <Logo />
        <UrlDetection />
        <FaceRecognition />
     </div>
    </div>
  )
}


export default App;

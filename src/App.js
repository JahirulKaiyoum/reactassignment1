import React from 'react';
import './App.css';
import Allcourses from './components/Allcourses/Allcourses';
import Header from './components/Header/Header';

function App() {
  return (
    
    <div className='container'>
      <Header></Header>
      
      <Allcourses></Allcourses>
    </div>
    
  );
}

export default App;

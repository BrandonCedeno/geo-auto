import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navigation';
import InfoSection from './components/InfoSection'; // Import the InfoSection component

function App() {
  return (
    <div className='main-page'>
       <NavigationBar />
      <div className='title-container'>
        <h1 className='title'>DAVIE BATTERY</h1>
        <h2 className='slogan'>We Care and We Deliver</h2>
      </div>

      <InfoSection />

    </div>
  );
}

export default App;

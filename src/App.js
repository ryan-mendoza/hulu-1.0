import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Results />
      {/* Footer */}
    </div>
  );
}

export default App;

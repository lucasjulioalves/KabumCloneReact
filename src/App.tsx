import React from 'react';
import './App.scss';
import TopBar from './components/TopBar/TopBar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

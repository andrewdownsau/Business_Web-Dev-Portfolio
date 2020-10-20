import React from 'react';
import './App.css';
import Menu from './components/menu.js';
import Footer from './components/footer.js';
import Body from './components/body.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

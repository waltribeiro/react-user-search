import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/';
import Search from './components/Search/';
import Header from './components/Header/';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;

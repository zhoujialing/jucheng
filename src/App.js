import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-flexible';
import Routes from "@/router"
import Tabbar from "@/components/layout/tabbar"
function App() {
  return (
    <div className="App">
        <Routes/>
        <Tabbar></Tabbar>
    </div>
  );
}

export default App;

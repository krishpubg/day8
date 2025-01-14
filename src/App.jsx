import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import ToggleFunc from './Component/ToogleFunc';
import RoutingCheck from './Component/RoutingCheck';

const Funnt = () => (
  <>
    <h1>FUNCTIONAL COMPONENTS</h1>
    <ToggleFunc />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Funnt />} />
            <Route path="/routingcheck" element={<RoutingCheck />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


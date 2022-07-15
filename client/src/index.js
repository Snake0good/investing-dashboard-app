import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import Markets from './pages/Markets';
import News from './pages/News';
import Search from './pages/StockSearch';
import Charts from './pages/Charts';
import Settings from './pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route index path="/" element={<App />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/markets" element={<Markets />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/charts" element={<Charts />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  </Router>
);

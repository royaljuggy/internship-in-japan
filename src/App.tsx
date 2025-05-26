import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import Test from './pages/Test';
import BlogEntryPage from './pages/BlogEntryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route
              path="/blog/:month_name/:day"
              element={<BlogEntryPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

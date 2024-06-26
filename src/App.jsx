import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import Navbar from './Navbar';
import Blog from './assets/Blog';
import LoginSignUp from './LoginSignUp/LoginSignUp';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/:type/:id" element={<DetailPage/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />

      </Routes>
    </Router>
  );
};

export default App;
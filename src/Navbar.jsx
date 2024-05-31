import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
// import HomePage from './HomePage';
// import Blog from './assets/Blog';

import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const handleSearchChange = (event) =>{
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchSubmit = (event)=>{
  //   event.preventDefault();
  //   const results =[
  //       `Result for "${searchQuery}" 1`,
  //       `Result for "${searchQuery}" 2`,
  //       `Result for "${searchQuery}" 3`,
  //   ];
  //   setSearchResults(results);
  //   setSearchQuery("");

  // }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">

          <NavLink >JATE Estate
              <img src={logo} alt="JATE Estate" className="navbar-logo"/>
          </NavLink>

        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/LoginSignUp" activeClassName="active">LOGIN/SIGNUP</NavLink>
          <NavLink to="/" activeClassName="active">HOME</NavLink>
          <NavLink to="/Blog" activeClassName="active">BLOGS</NavLink>

        </div>
        {/* <div className={`navbar-user ${isOpen ? 'open' : ''}`}>
          <NavLink to="/Login" activeClassName="active">{Login}</NavLink>
          <NavLink to="/Signup" activeClassName="active">{SignUp}</NavLink>
        </div> */}
        {/* <div className="navbar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
          {searchResults.length > 0 &&(
            <div className="search-results">
                <ul>
                    {searchResults.map((result, index)=>(
                        <li key={index}>{result}</li>
                    ))}
                </ul>
                </div>
          )}
        </div> */}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

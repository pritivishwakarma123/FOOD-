import React, { useRef, useState } from "react";
import Logo from "../images/logo.jpg";
import { cart } from "../Data";
import { Link } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      axios.post('http://localhost:3000/searches', { term: searchTerm })
        .then(response => {
          console.log('Search term posted:', response.data);
          alert('Search term submitted!');
          setSearchTerm(''); // Clear the search term
        })
        .catch(error => {
          console.error('Error posting search term:', error);
          alert('There was an error submitting the search term. Please try again.');
        });
    }
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/products">Products</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </nav>
        <div className="icons">
          <div className="fas fa-search" id="search-btn" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <form className="search-form" ref={searchRef} onSubmit={handleSearchSubmit}>
          <input
            type="search"
            id="search-box"
            placeholder="search here..."
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={item.id}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">${item.price}/-</div>
              </div>
            </div>
          ))}
          <Link to="https://pinchofyum.com/" className="btn">
            checkout now
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;

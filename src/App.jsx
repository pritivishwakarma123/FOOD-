import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Products from './Components/Products';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Blog from './Components/Blogs';
import Footer from './Components/Footer';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  return (
    <>``
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;

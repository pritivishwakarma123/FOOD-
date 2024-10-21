import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share"> 
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>
        <div className="links">
          <a href="#">Home</a> 
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Products</a>
          <a href="#">Review</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>
        <div className="credit">
          Created By <span>Priti Vishwakarma</span> 
        </div>
      </section>
    </>
  );
};

export default Footer;


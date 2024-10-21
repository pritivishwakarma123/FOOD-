import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/contacts', formData)
      .then(response => {
        console.log('Contact data stored:', response.data);
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          number: ''
        });
      })
      .catch(error => {
        console.error('Error storing contact data:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact Us</span> 
        </h1>
        <div className="row">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7574.788345256822!2d72.94944324133948!3d18.32929323091006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8439970d33ff7%3A0x1c2a43f493acc16f!2sMurud%20Beach!5e0!3m2!1sen!2sin!4v1720449490312!5m2!1sen!2sin" 
            width="600px" 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
          <form onSubmit={handleSubmit}>
            <h3>Get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input 
                type="text" 
                name="name"
                placeholder="Enter Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input 
                type="email" 
                name="email"
                placeholder="Enter Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input 
                type="number" 
                name="number"
                placeholder="Enter Your Number" 
                value={formData.number}
                onChange={handleChange}
                required 
              />
            </div>
            <input type="submit" value="Contact Now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
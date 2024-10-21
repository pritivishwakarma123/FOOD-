import React from 'react'
import { menu } from "../Data";
import axios from 'axios'
const Menu = () => {
  const addToCart = (item) => {
    axios.post('http://localhost:3000/cart', item)
      .then(response => {
        console.log('Item added to cart:', response.data);
        alert('Item added to cart!');
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        alert('There was an error adding the item to the cart. Please try again.');
      });
  };
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          <span>Our Menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>tasty and healty</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
              <br />
              <button onClick={() => addToCart(item)} className="btn">
                add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Menu

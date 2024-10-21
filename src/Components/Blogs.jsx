import React from "react";
import { blog } from "../Data";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          <span>Our Blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <Link to="https://pinchofyum.com/" className="title">
                  tasty and refreshing spices
                </Link>
                <span>by admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <Link to="https://pinchofyum.com/" className="btn">
                  read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

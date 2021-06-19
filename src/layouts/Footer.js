import React from "react";

const Bottom = () => {
  return (
    <footer className="endpage">
      <div className=" grid grid-3">
        <div>
          <h1>Haphyz</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>            
            <li>
              <a href="features.html">Link</a>
            </li>
            <li>
            
              <a href="docs.html">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="social">
          <a href="https://github.com/tayyor">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://facebook.com">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://instagram.com">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;

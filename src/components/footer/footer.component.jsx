import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="footer-left">
              <span>
                &copy; 2020 <Link>Pharmacare</Link>
              </span>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="footer-right">
              <span className="footer-meta">
                Crafted with&nbsp;
                <AiFillHeart color="#FB8C00" /> &nbsp;by&nbsp;
                <Link>Ibrahima</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

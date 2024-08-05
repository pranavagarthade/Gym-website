import React from "react";
import "./Patch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Patch = () => {
  return (
    <section className="banner">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Helmet>
      <div className="banner-content">
        <span className="banner-text">
          Book Your Online Session & Start Training
        </span>
        <Link className="banner-button" to="/Form">
          <i className="fas fa-calendar-alt"></i> BOOK NOW!
        </Link>
      </div>
    </section>
  );
};

export default Patch;

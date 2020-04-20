import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <nav class="nav-wrapper  deep-orange darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">My Project 
         <i class="material-icons">fingerprint</i>
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;

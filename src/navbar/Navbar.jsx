import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-links flex justify-center">
        <Link to="/" className="me-3">
          Home
        </Link>
        <Link to="/favoritepage" className="me-3">
          Favorites
        </Link>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
}

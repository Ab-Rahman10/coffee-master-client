import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addCoffee">Add Coffee</NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/users">Users</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

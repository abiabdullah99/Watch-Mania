import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsSmartwatch } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>
          WATCH{" "}
          <span>
            MANIA <BsSmartwatch size={24} />
          </span>
        </h1>
        <div className="nav">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/reviews"
          >
            REVIEWS
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            BLOGS
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/about"
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

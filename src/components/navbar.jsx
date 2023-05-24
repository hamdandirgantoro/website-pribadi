import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation-bar">
      <ul className="list">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/fillicons-information-technology/1550/programmer_software_developer-512.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">tentang saya</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pengalaman"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1477/1477620.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">pengalaman</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1205/1205515.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">project</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pendidikan"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1509/1509599.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">pendidikan</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skill"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2188/2188907.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">skill</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sertifikat"
            activeClassName="active"
            className="inactive"
            draggable="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/7238/7238706.png"
              alt=""
              draggable="false"
            />{" "}
            <p className="highlighted">sertifikat</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

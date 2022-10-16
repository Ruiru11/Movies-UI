import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const pageLinks: {
  label: string;
  link: string;
}[] = [
  {
    label: "Contact",
    link: "/contact"
  }
];

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        {pageLinks.map((item) => {
          return (
            <li className="nav-item" key={item.link}>
              <Link to={item.link}>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;

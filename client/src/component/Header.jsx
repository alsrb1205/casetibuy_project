import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header-outer">
      <div className="header relative">
        <div className="header-left">
          <Link to="/" className="header-menu">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        <img
          src="https://cdn.casetify.com/img/ui/casetify-logo.png"
          alt=""
          className="header-logo"
        />

        <div className="header-right">
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
      {/* <iframe
        src="https://cdn-stamplib.casetify.com/cms/video/4a7a7c1cd669bf005e2cdc596b0345fa.mp4"
        frameborder="0"
      ></iframe> */}
     </div>
  );
}
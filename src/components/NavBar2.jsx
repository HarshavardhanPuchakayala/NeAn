

import { FaPhone } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import "./NavBar2.css";

export default function NavBar() {
  return (
    <nav className="nav-root" aria-label="Primary">
      <div className="Nav1">
        <h1>An ISO 9001:2025</h1>
        <div className="NavContact">
          <a href="tel:+918187895250"><FaPhone className="icon" /> +91 8019890055</a>
          <a href="mailto:Sales@Nean.in"><GoMail className="icon" /> info.peb@neanind.com</a>
        </div>
      </div>
    </nav>
  );
}

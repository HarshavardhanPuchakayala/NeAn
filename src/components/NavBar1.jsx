import { useState } from "react";
import { Link } from "react-router";
import "./NavBar1.css";

export default function NavBar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [conveyorsOpen, setConveyorsOpen] = useState(false);

  const isMobile = window.innerWidth <= 768;

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setConveyorsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/NeAn_Logo.png" className="logo" />
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={closeMenu}>About us</Link></li>

          {/* Products & Services */}
          <li
            className="dropdown"
            onMouseEnter={() => !isMobile && setServicesOpen(true)}
            onMouseLeave={() => {
              if (!isMobile) {
                setServicesOpen(false);
                setConveyorsOpen(false);
              }
            }}
          >
            <span onMouseEnter={() => isMobile && setServicesOpen(!servicesOpen)}>
              Products & Services ▾
            </span>

            <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>

              {/* Conveyors */}
              <div
                className="dropdown-item nested"
                onMouseEnter={() => !isMobile && setConveyorsOpen(true)}
                onMouseLeave={() => !isMobile && setConveyorsOpen(false)}
              >
                <span
                  onMouseEnter={() => isMobile && setConveyorsOpen(!conveyorsOpen)}
                >
                    <Link to="/Conveyors">
                  Conveyors ▸
                  </Link>
                </span>

                <div className={`nested-menu ${conveyorsOpen ? "show" : ""}`}>
                  {/* <Link to="/Conveyors" onClick={closeMenu}>Conveyors</Link> */}
                  <Link to="/Idlers" onClick={closeMenu}>Idlers</Link>
                  <Link to="/Pulleys" onClick={closeMenu}>Pulleys</Link>
                  <Link to="/OtherProducts" onClick={closeMenu}>Other Products</Link>
                </div>
              </div>

              {/* PEB */}
              <Link to="/PEB" className="dropdown-item" onClick={closeMenu}>
                PEB
              </Link>
            </div>
          </li>

          <li><Link to="/Portfolio" onClick={closeMenu}>Production Line</Link></li>
          <li><Link to="/ContactUS" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

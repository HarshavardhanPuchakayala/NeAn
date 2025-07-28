import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

import { Link } from "react-router";
export default function NavBar() {
  return (
   <nav>
    <div className="Nav1">
        <h1>An ISO 9001:2025</h1>

        <div className="NavContact">
            <a href="tel:+918187895250"><FaPhone className="icon"/> +91 8187895250</a>
           <a href="mailto:"><GoMail className="icon"/> Sales@Nean.in</a>
        </div>
    </div>

    <div className="Nav2">
        <img src="/assets/NeAn_Logo.png" alt="NeAn Industries Pvt Ltd"  />

        <div className="NavMenu">
            <Link to="/">Home</Link>
            <Link to="/AboutUs">About us</Link>
            <Link to="/PEB">PEB</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/ContactUS">Contact us</Link>
        </div>
    <a href="" className="MenuIcon">
        <IoMenu className="Icon"/>
    </a>
    </div>
   </nav>
  )
}

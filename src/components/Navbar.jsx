import { Link } from "react-router-dom";
import logo from "../assets/icons/vector-40.png";
import "../styles/components/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="logo-title-container">
          <Link to={"/"}>
            <img
              src={logo}
              alt="El gaucho logo: a bovine horned head"
              className="logo"
            />
            <span className="title">
              <span className="title-el">El</span>
              <span className="title-gaucho">Gaucho</span>
            </span>
          </Link>
        </div>
        <div className="list-container">
          <ul className="list">
            <li>
              <Link to={"/menu/"}>Menu</Link>
            </li>
            <li>
              <Link to={"/contact/"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about/"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

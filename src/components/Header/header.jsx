import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import '../../style/header.scss'

// Header displays the logo and creates a navigation that will be used in "App.jsx".

export function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo of Kasa" />
    
      <nav className="header__nav">
        <Link className="header__li" to="/">Accueil</Link>
        <Link className="header__li" to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
}

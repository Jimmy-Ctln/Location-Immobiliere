import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import '../../style/header.scss'

// Header displays the logo and creates a navigation that will be used in "App.jsx".

export function Header() {

  const location = useLocation()
  
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo of Kasa" />

      <nav className="header__nav">
        <Link className={`header__li ${location.pathname === '/' ? 'header__li__active' : ''}`} to="/">Accueil</Link>
        <Link className={`header__li ${location.pathname === '/a-propos' ? 'header__li__active' : ''}`} to="/a-propos">A Propos</Link>
      </nav>
    </div>
  );
}


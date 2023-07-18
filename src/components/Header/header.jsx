import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import '../../style/header.scss'


export function Header() {
  return (
    <div className="banner">
      <img className="banner__logo" src={logo} alt="logo of Kasa" />
    
      <nav className="banner__nav">
        <Link className="banner__li" to="/">Accueil</Link>
        <Link className="banner__li" to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
}

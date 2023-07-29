import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import '../../style/header.scss'
import { useState } from "react";

// Header displays the logo and creates a navigation that will be used in "App.jsx".

export function Header() {

  const [classActiveA, setClassActiveA] = useState(true)
  const [classActiveB, setClassActiveB] = useState(false)


  const handleClickA = () => {
    setClassActiveA(true)
    setClassActiveB(false)
  }

  const handleClickB = () => {
    setClassActiveB(true);
    setClassActiveA(false)
  }

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo of Kasa" />

      <nav className="header__nav">
        <Link className={`header__li ${classActiveA ? 'header__li__active' : ''}`} onClick={handleClickA} to="/">Accueil</Link>
        <Link className={`header__li ${classActiveB ? 'header__li__active' : ''}`} onClick={handleClickB} to="/apropos">A Propos</Link>
      </nav>
    </div>
  );
}


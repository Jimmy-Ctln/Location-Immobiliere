import logo from "../../assets/logo.svg";
import '../../style/header.scss'
import { NavBar } from "../Navbar/navbar";

// Header displays the logo and creates a navigation that will be used in "App.jsx".

export function Header() {

  

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo of Kasa" />
      <NavBar/>
    </div>
  );
}


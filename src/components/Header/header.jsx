import logo from "../../assets/logo.svg";
import { NavBar } from "../Navbar/navbar";
import '../../style/header.scss'

export function Header() {
  
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo of Kasa" />
      <NavBar/>
    </header>
  );
}


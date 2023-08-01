import { Link, useLocation } from "react-router-dom";
import '../../style/navbar.scss'

export function NavBar() {

    const location = useLocation()
    
    return(
        <nav className="nav">
        <Link className={`nav__li ${location.pathname === '/' ? 'nav__li__active' : ''}`} to="/">Accueil</Link>
        <Link className={`nav__li ${location.pathname === '/a-propos' ? 'nav__li__active' : ''}`} to="/a-propos">A Propos</Link>
      </nav>
    )
}
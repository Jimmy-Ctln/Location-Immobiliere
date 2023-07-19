import error404 from '../../assets/error404.svg'
import { Link } from "react-router-dom";
import '../../style/error404.scss'

export function Error404() {
    return(
        <div className='error'>
            <img src={error404} className='error__img'alt="erreur 404" />
            <h3 className='error__title'>Oups! La page que vous demandez n'existe pas.</h3>
            <Link className='error__link' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
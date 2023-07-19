import logo_footer from '../../assets/logo_footer.svg'
import '../../style/footer.scss'

export function Footer() {
    return(
        <div className='footer' >
            <img src={logo_footer} className="footer__img" alt="Logo Kasa Footer de la page" />
            <span className="footer__txt">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}
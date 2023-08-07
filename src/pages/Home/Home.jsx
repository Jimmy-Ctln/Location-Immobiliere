import { Banner } from "../../components/Banner/Banner"
import { Gallery } from "../../components/Gallery/gallery"
import homeBackground from '../../assets/home-background.png'
import '../../style/banner.scss'

// "Home" displays the "Banner" and "Gallery" components. "Home" will be called with the "/" route in App.jsx

export function Home() {
    return(
        <main className="main-content">
            <Banner
            picture={homeBackground}
            ClassSection="section"
            ClassOverlay="section__overlay1"
            ClassImg='section__img1'
            ClassTitle='section__title1'
            title={`Chez vous, ${'\n'}partout et ailleurs`}
            />
            <Gallery />
        </main> 
    )
}
import { ImageBanner } from "../../components/ImageBanner/imageBanner"
import { Gallery } from "../../components/Gallery/gallery"
import homeBackground from '../../assets/home-background.png'
import '../../style/ImageBanner.scss'
import '../../style/home.scss'

// "Home" displays the "ImageBanner" and "Gallery" components. "Home" will be called with the "/" route in App.jsx

export function Home() {
    return(
        <main className="main-content">
            <ImageBanner
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
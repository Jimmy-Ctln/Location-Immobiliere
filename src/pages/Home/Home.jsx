import { ImageBanner } from "../../components/ImageBanner/imageBanner"
import '../../style/home.scss'
import { Gallery } from "../../components/Gallery/gallery"
import homeBackground from '../../assets/home-background.png'

// "Home" displays the "ImageBanner" and "Gallery" components. "Home" will be called with the "/" route in App.jsx

export function Home() {
    return(
        <div className="body">
            <ImageBanner picture={homeBackground} title={'Chez vous, partout et ailleurs'}/>
            <Gallery />
        </div> 
    )
}
import { ImageBanner } from "../../components/Image banner/imageBanner"
import '../../style/home.scss'
import { Gallery } from "../../components/Gallery/gallery"

// "Home" displays the "ImageBanner" and "Gallery" components. "Home" will be called with the "/" route in App.jsx

export function Home() {
    return(
        <div className="body">
            <ImageBanner />
            <Gallery />
        </div> 
    )
}
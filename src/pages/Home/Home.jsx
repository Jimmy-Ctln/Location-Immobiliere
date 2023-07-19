import { ImageBanner } from "../../components/Image banner/imageBanner"
import '../../style/home.scss'
import { Gallery } from "../../components/Gallery/gallery"

export function Home() {
    return(
        <div className="body">
            <ImageBanner />
            <Gallery />
        </div> 
    )
}
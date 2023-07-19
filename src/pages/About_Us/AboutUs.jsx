import { ImageBanner } from "../../components/Image banner/imageBanner"
import aboutBackground from '../../assets/aboutUs-Background.svg'


export function AboutUs() {
    return(
        <div>
            <ImageBanner picture={aboutBackground}/>
        </div>
    )
}
import { useState } from "react"
import '../../style/carrousel.scss'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

export function Carrousel({pictures}) {


    const [currImage, setCurrImage] = useState(0)
    const currentSlide = currImage + 1;
    const currentPictures = pictures.length;
    const hideElement = currentPictures === 1;
    
    
    return(
        <div>
            <div className="carrousel">
                    <img className="carrousel__img" src={pictures[currImage]} alt="logement" />
                    <img src={arrowLeft} className={`carrousel__arrow__left ${hideElement ? 'hide__elements' : ''}`} onClick={() => currImage === 0 ? setCurrImage(pictures.length - 1) : currImage > 0 && setCurrImage(currImage - 1)} alt="Flèche de gauche carrousel" />
                    <img src={arrowRight} className={`carrousel__arrow__right ${hideElement ? 'hide__elements' : ''}`} onClick={() => currImage === pictures.length -1 ? setCurrImage(0) : setCurrImage(currImage + 1)} alt="Flèche de droite carrousel" />
                <div className={`carrousel__slideCounter ${hideElement ? 'hide__elements' : ''}`}>
                    <span>{currentSlide}/{currentPictures}</span>
                </div>
            </div>
        </div>
    )
}
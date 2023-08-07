import { useState } from "react"
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import '../../style/carousel.scss'

export function Carousel({pictures}) {


    const [currImage, setCurrImage] = useState(0)
    const currentSlide = currImage + 1;
    const totalPictures = pictures.length;
    const hideElement = totalPictures === 1;


    function prevSlide() {
        if (currImage === 0) {
            setCurrImage(pictures.length - 1) 
        } else {
            setCurrImage(currImage - 1)
        }
    }
    
    function nextSlide() {
        if (currImage === pictures.length -1) {
            setCurrImage(0)
        } else {
            setCurrImage(currImage + 1)
        } 
    }

    return(
            <div className="carrousel">
                    <img className="carrousel__img" src={pictures[currImage]} alt="logement" />
                    <img src={arrowLeft} className={`carrousel__arrow__left ${hideElement ? 'hide__elements' : ''}`} onClick={prevSlide} alt="Flèche de gauche carrousel" />
                    <img src={arrowRight} className={`carrousel__arrow__right ${hideElement ? 'hide__elements' : ''}`} onClick={nextSlide} alt="Flèche de droite carrousel" />
                <div className={`carrousel__slideCounter ${hideElement ? 'hide__elements' : ''}`}>
                    <span>{currentSlide}/{totalPictures}</span>
                </div>
            </div>
    )
}
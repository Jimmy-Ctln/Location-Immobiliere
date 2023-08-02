import { ImageBanner } from "../../components/ImageBanner/imageBanner"
import { Collapse } from "../../components/Collapse/collapse"
import aboutBackground from '../../assets/aboutUs-Background.png'
import '../../style/aboutUs.scss'
import '../../style/ImageBanner.scss'


export function AboutUs() {

    const collapse = [
        {
            id: "1",
            title: "Fiabilité",
            content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sontrégulièrement vérifiées par nos équipes."
        },
        {
            id: "2",
            title: "Respect",
            content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: "3",
            title: "Service",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."

        },
        {
            id: "4",
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisonségalement des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return(
        <div className="aboutUs">
                <ImageBanner
                ClassSection="section2"
                ClassOverlay="section2__overlay2"
                ClassImg='section2__img2'
                picture={aboutBackground}
                />    
            <div className="aboutUs__collapse">
                {collapse.map(collapse => <Collapse key={collapse.id} title={collapse.title} content={collapse.content} />)}
            </div>
        </div>
    )
}
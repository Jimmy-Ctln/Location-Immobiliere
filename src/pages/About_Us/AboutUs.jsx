import { ImageBanner } from "../../components/ImageBanner/imageBanner"
import { Collapse } from "../../components/Collapse/collapse"
import aboutBackground from '../../assets/aboutUs-Background.svg'

export function AboutUs() {

    const collapse = [
        {
            title: "Fiabilité",
            content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sontrégulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."

        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisonségalement des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return(
        <div>
            <ImageBanner picture={aboutBackground}/>
            {collapse.map(collapse => ( <Collapse key={collapse.title} title={collapse.title} content={collapse.content} />))}
        </div>
    )
}
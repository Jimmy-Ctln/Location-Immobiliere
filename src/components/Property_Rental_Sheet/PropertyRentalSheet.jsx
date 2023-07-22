import { useParams } from "react-router-dom"
import '../../style/propertyRental.scss'

export function PropertyRentalSheet({title, carrousel, description, hostName, hostPicture, rating, location, equipements, tags}) {

 // useParams retrieves the id and I'm going to unstructure it => {propertyRentalId} 
    // I'll be able to generate a page with the exact id of the property rental

    const {propertyRentalId} = useParams()
    console.log(propertyRentalId)

    // Créer un composant pour l'appeler ici et afficher suivant l'id la page.

    return(
        <div className="propertyrental">
            <div className="propertyrental__carrousel">
                <img className="propertyrental__img" src={carrousel} alt="logement" />
            </div>
            <div className="propertyrental__grid">
                <div className="propertyrental__left">
                    <h2 className="propertyrental__title">{title}</h2>
                    <span className="propertyrental__location">{location}</span>
                </div>
                    <div className="propertyrental__right">
                        <span className="propertyrental__host__name">{hostName}</span>
                        <img className="propertyrental__host__img"src={hostPicture} alt="" />
                    </div>
            </div>
        
            
            
            {/* <span>{description}</span>
            <div>{host}</div>
            <span>{name}</span>
            <span>{picture}</span>
            <span>{rating}</span>
            <span>{location}</span>
            <span>{equipements}</span>
            <span>{tags}</span> */}
            {/* <img className="propertyrental__img" src={carrousel} alt="logement" /> */}



        </div>
    )
}
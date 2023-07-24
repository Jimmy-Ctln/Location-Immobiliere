import '../../style/propertyRental.scss'


export function PropertyRentalSheet({title, hostName, hostPicture, rating, location, equipements, tags}) {

 // useParams retrieves the id and I'm going to unstructure it => {propertyRentalId} 
    // I'll be able to generate a page with the exact id of the property rental


    // Créer un composant pour l'appeler ici et afficher suivant l'id la page.

    return(
        <div className="propertyrental">
            <div className="propertyrental__grid">
                <div className="propertyrental__left">
                    <h2 className="propertyrental__title">{title}</h2>
                    <span className="propertyrental__location">{location}</span>
                </div>
                    <div className="propertyrental__right">
                        <span className="propertyrental__host__name">{hostName}</span>
                        <img className="propertyrental__host__img"src={hostPicture} alt="propriétaire" />
                    </div>
            </div>
        </div>

    )
}
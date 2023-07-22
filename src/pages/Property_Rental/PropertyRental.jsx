import { useState, useEffect } from "react"
import { PropertyRentalSheet } from "../../components/Property_Rental_Sheet/PropertyRentalSheet"
import { datas } from "../../Datas/datas"
import { useParams } from "react-router-dom"


export function PropertyRental() {

// useParams retrieves the id and I'm going to unstructure it => {propertyRentalId} 
    // I'll be able to generate a page with the exact id of the property rental

    const {propertyRentalId} = useParams()

    // Créer un composant pour l'appeler ici et afficher suivant l'id la page.

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

        const filteredData = datas.filter((item) => item.id === propertyRentalId);
        setFilteredData(filteredData)
    }, [propertyRentalId])

    return(
        <div>
            {filteredData.map((item) => (
            <PropertyRentalSheet
            // Pour le carrousel, il faudra d'abord le créer et appeler les picture comme en dessous ?
            carrousel={item.pictures[0]} 
            key={item.id}
            title={item.title}
            location={item.location}
            hostName={item.host.name}
            hostPicture={item.host.picture}

            
            
            
            />
            
            ))}
        </div>
    )
}
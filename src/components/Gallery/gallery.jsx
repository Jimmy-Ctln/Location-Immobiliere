import { Card } from "../Card/card";
import { useEffect, useState } from 'react'
import '../../style/gallery.scss'

export function Gallery() {
    const [locationList, setLocationList] = useState([])

  useEffect(() => {
    async function fetchPropertyRental() {
      try {
        const response = await fetch("http://localhost:3001/api/data")
        const locationList  = await response.json()
        setLocationList(locationList)
      } catch {
        console.log('Une erreur est survenue');
      }
    }
    fetchPropertyRental();
  }, []);

  return (

    <div className="gallery__container">
            {locationList.map((location) => (
            
                <Card
                    key={location.id}
                    cover={location.cover}
                    title={location.title}
                />
            ))}

    </div>

  )
}

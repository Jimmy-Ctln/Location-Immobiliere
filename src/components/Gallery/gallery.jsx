import { Card } from "../Card/card";
// import { useEffect, useState } from 'react'
import "../../style/gallery.scss";
import { datas } from "../../Datas/datas";

// gallery here allows you to retrieve property rentals and generate them using the card component.

export function Gallery() {
  //   const [locationList, setLocationList] = useState([])

  // useEffect(() => {
  //   async function fetchPropertyRental() {
  //     try {
  //       const response = await fetch("http://localhost:3001/api/data")
  //       const locationList  = await response.json()
  //       setLocationList(locationList)
  //     } catch {
  //       console.log('Une erreur est survenue');
  //     }
  //   }
  //   fetchPropertyRental();
  // }, []);

  return (
    <div className="gallery__container">
      {datas.map((location) => (
        <Card 
          key={location.id} 
          cover={location.cover} 
          title={location.title} />
      ))}
    </div>
  );
}

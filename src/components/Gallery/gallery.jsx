import { Card } from "../Card/card";
import { datas } from "../../Datas/datas";
import "../../style/gallery.scss";

// gallery here allows you to retrieve property rentals and generate them using the card component.

export function Gallery() {
  
  return (
    <div className="gallery">
      <div className="gallery__grid">
        {datas.map((property) => (
          <Card 
            key={property.id}
            id={property.id} 
            cover={property.cover} 
            title={property.title} />
        ))}
        </div>
    </div>
  );
}

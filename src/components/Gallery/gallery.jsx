import { Card } from "../Card/card";
import { datas } from "../../Datas/datas";
import "../../style/gallery.scss";

// gallery here allows you to retrieve property rentals and generate them using the card component.

export function Gallery() {
  
  return (
    <div className="gallery">
      <div className="gallery__grid">
        {datas.map((location) => (
          <Card 
            key={location.id}
            id={location.id} 
            cover={location.cover} 
            title={location.title} />
        ))}
        </div>
    </div>
  );
}

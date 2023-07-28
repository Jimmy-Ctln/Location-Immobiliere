import { Card } from "../Card/card";
import "../../style/gallery.scss";
import { datas } from "../../Datas/datas";

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

import { useState, useEffect } from "react";
import { Title } from "../../components/Title/Title";
import { datas } from "../../Datas/datas";
import { useParams } from "react-router-dom";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { Rating } from "../../components/Rating/rating";
import { Tags } from "../../components/Tags/tags";
import { Collapse } from "../../components/Collapse/collapse";
import { Host } from "../../components/Host/host";
import "../../style/propertyRental.scss";

export function PropertyRental() {
  // useParams retrieves the id and I'm going to unstructure it => {propertyRentalId}
  // I'll be able to generate a page with the exact id of the property rental

  const { propertyRentalId } = useParams();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredData = datas.filter((item) => item.id === propertyRentalId);
    setFilteredData(filteredData);
  }, [propertyRentalId]);

  return (
    <div className="property">
      {filteredData.map((item) => (
        
        <div className="property__content" key={item.id}>
          
          <div className="property__carrousel">
            <Carrousel pictures={item.pictures} />
          </div>

        <div className="property__grid">
          <div className="property__title">
            <Title key={item.id} title={item.title} location={item.location} />
          </div>
        

          <div className="property__host">
            <Host hostName={item.host.name} hostPicture={item.host.picture} />
          </div>

          <div className="property__rating">
            <Rating rating={item.rating} />
          </div>
          <div className="property__tags">
            <Tags tags={item.tags} />
          </div>
          
          <div className="property__collapse__description">
            <Collapse title={"Description"} content={item.description} />
          </div>
          <div className="property__collapse__equipement">
            <Collapse title={"Équipements"} content={item.equipments} />
          </div>
        </div>
        
        </div>
      ))}
    </div>
  );
}

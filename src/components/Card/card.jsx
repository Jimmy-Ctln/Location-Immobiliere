import { useNavigate } from "react-router-dom";
import "../../style/card.scss";

// creation of a standard card with props to be used in the gallery component

export function Card({ id, cover, title }) {
  // I use navigate to sotcker and send the id when I click on a card

  let navigate = useNavigate();

  // With the onClick event, I can store the id of the card here

  const retrieveIdCard = (propertyRentalId) => {
    navigate("../property-rental/" + propertyRentalId);
  };

  return (
    <div className="card" id={id} onClick={() => retrieveIdCard(id)}>
      <img className="card__img" src={cover} alt="location immobilière"></img>
      <span className="card__title">{title}</span>
    </div>
  );
}

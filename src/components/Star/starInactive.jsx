import starInactive from "../../assets/star-inactive.svg";
import "../../style/starEmpty.scss";

export function StarInactive() {
  return (
    <img className="star__empty" src={starInactive} alt="Étoile remplie" />
  );
}

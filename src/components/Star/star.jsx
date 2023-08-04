import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import "../../style/star.scss";

export function Star({isActive}) {
  return <img className='star' src={isActive ? starActive : starInactive} alt="Étoile" />;
}
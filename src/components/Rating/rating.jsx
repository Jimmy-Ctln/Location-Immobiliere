import { Star } from "../Star/star";
import "../../style/rating.scss";

export function Rating({ rating }) {
  const arrayStars = [];

  const totalStars = 5;

  for (let i = 0; i < totalStars; i++) {
    arrayStars.push(<Star isActive={i < rating} key={i} />);
  }
  
  return <div className="rating">{arrayStars}</div>;
}

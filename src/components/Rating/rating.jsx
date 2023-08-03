import { StarActive } from "../Star/starActive";
import { StarInactive } from "../Star/starInactive";
import "../../style/rating.scss";

export function Rating({ rating }) {
  const arrayStars = [];

  const totalStars = 5;

  for (let i = 0; i < rating; i++) {
    arrayStars.push(<StarActive key={i} />);
  }

  for (let i = arrayStars.length; i < totalStars; i++) {
    arrayStars.push(<StarInactive key={i} />);
  }

  return <div className="rating">{arrayStars}</div>;
}

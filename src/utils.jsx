import { FullStar } from "./Components/Star/FullStar";
import { HalfStar } from "./Components/Star/HalfStar";
import { EmptyStar } from "./Components/Star/EmptyStar";

const promotionPourcentage = 30 / 100


export function getRatingStars (product) {
  // console.log(product);
  const stars = [];
  const nbrFullstar = Math.floor(product.rating);
  const nbrEmptystar = 5 - Math.ceil(product.rating);
  const nbrHalfstar = 5 - nbrEmptystar - nbrFullstar;

  for (let i = 0; i < nbrFullstar; i++) {
    stars.push(<FullStar key={"Fullstar" + i} />);
  }
  if (nbrHalfstar > 0) {
    stars.push(<HalfStar key="HalfStar" />);
  }
  for (let i = 0; i < nbrEmptystar; i++) {
    stars.push(<EmptyStar key={"EmptyStar" + i} />);
  }
  return stars;
} 
export function showCurrentPrice(product) {
  let currentPrice;
  if (product.promotion === true) {
    currentPrice = product.price - product.price * promotionPourcentage;
  } else {
    currentPrice = product.price;
  }
  return parseFloat(currentPrice.toFixed(2));
}

export const disponibility = () => {
  let isAvailable = Math.trunc(Math.random() * 4);
  if (isAvailable) {
    return ["#66E264", "En stock"];
  }
  return ["#E7A05E", "Bientot disponible"];
};
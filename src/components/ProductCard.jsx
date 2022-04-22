import { Link } from "react-router-dom";
import "../styles/components/product-card.css";

export default function ProductCard({ dish, category }) {
  return (
    <div
      className="product-card"
      style={{ backgroundImage: `url(${dish.image})` }}
    >
      <Link to={`/menu/${category}/${dish.id}`}>{dish.name}</Link>
    </div>
  );
}

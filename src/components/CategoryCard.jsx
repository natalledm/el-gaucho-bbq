import { Link } from "react-router-dom";
import "../styles/components/category-card.css";

export default function CategoryCard({ category }) {
  return (
    <div
      className="card-item"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <Link to={"/menu/" + category.id}>{category.id}</Link>
    </div>
  );
}

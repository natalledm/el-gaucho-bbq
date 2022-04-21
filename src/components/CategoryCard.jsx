import { Link } from "react-router-dom";
import "../styles/components/category-card.css";

export default function CategoryCard({ menu }) {
  const categories = menu.map((item) => {
    return (
      <li
        key={item.id}
        className="card-item"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <Link to={"/menu/" + item.id}>{item.id}</Link>
      </li>
    );
  });

  return <>{categories}</>;
}

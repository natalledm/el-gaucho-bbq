import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/pages/product-page.css";

import { getDocument } from "../scripts/fireStoreDB";

export default function ProductPage() {
  const { category, productId } = useParams();
  const [dish, setDish] = useState({});

  useEffect(() => {
    async function loadData(path, productId) {
      const dishDB = await getDocument(path, productId);
      setDish(dishDB);
    }
    loadData(`menu/${category}/content`, productId);
  }, [productId, category]);

  return (
    <div>
      <div>
        <Header bgImg={dish.image} title={dish.name} />
      </div>
      <div className="product-content-container">
        <div>
          <h3>About our {dish.name}</h3>
          <p>{dish.description}</p>
        </div>
        <div>
          <h3>Ingredients:</h3>
          <p>{dish.ingredients}</p>
        </div>
        <div>
          <h3>Price:</h3>
          <p>{dish.price} :-</p>
        </div>
        <Link to={`/menu/${category}`} className="main-button">
          Back to {category}
        </Link>
      </div>
    </div>
  );
}

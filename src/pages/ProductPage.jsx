import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

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
      {JSON.stringify(dish, null, 4)}
      <Link to={`/menu/${category}`}>Back to {category}</Link>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// script
import { getCollection } from "../scripts/fireStoreDB";

export default function CategoryPage() {
  const { category } = useParams();

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function loadData(path) {
      const dishesDB = await getCollection(path);
      setDishes(dishesDB);
    }
    loadData(`menu/${category}/content`);
  }, [category]);

  const dishesElements = dishes.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`/menu/${category}/${item.name}`}>{item.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>{category}</h1>
      <ul>{dishesElements}</ul>
    </div>
  );
}

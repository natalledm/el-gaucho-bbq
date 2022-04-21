import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

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
        <Link to={`/menu/${category}/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  console.log(category);

  return (
    <div>
      <Header bgImg={category.imageUrl} title={category} />
      <div>
        <ul>{dishesElements}</ul>
      </div>
    </div>
  );
}

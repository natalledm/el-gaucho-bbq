import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

// script
import { getCollection, getDocument } from "../scripts/fireStoreDB";

export default function CategoryPage() {
  const { category } = useParams();

  const [dishes, setDishes] = useState([]);

  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    async function loadData(path) {
      const dishesDB = await getCollection(path);
      setDishes(dishesDB);
    }
    loadData(`menu/${category}/content`);
  }, [category]);

  useEffect(() => {
    async function loadDocument(path, docId) {
      const categoryDB = await getDocument(path, docId);

      setCategoryData(categoryDB);
    }
    loadDocument("menu", category);
  }, [category]);

  console.log(categoryData);

  const dishesElements = dishes.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`/menu/${category}/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <Header bgImg={categoryData.imageUrl} title={categoryData.id} />
      <div>
        <ul>{dishesElements}</ul>
      </div>
    </div>
  );
}

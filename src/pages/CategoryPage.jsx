import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "../styles/pages/category-page.css";

// script
import { getCollection, getDocument } from "../scripts/fireStoreDB";

export default function CategoryPage() {
  const { category } = useParams();

  const [dishes, setDishes] = useState([]);

  const [categoryData, setCategoryData] = useState({});

  // get dishes
  useEffect(() => {
    async function loadData(path) {
      const dishesDB = await getCollection(path);
      setDishes(dishesDB);
    }
    loadData(`menu/${category}/content`);
  }, [category]);

  // get document
  useEffect(() => {
    async function loadDocument(path, docId) {
      const categoryDB = await getDocument(path, docId);

      setCategoryData(categoryDB);
    }
    loadDocument("menu", category);
  }, [category]);

  return (
    <div>
      <Header bgImg={categoryData.imageUrl} title={categoryData.id} />
      <div className="category-page-content-container">
        <ul className="categories-cards-container">
          {dishes.map((dish) => (
            <li key={dish.id}>
              <ProductCard dish={dish} category={category} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { getCollection, deleteDocument } from "../scripts/fireStoreDB";

import ProductCard from "../components/ProductCard";

export default function DeleteDishPage() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [dishCategory, setDishCategory] = useState("");
  const [refreshNeeded, setRefreshNeeded] = useState(false);

  // load categories
  useEffect(() => {
    async function loadData(path) {
      const categoriesDB = await getCollection(path);

      const categoriesIds = categoriesDB.map((category) => {
        return category.id;
      });

      setCategories(categoriesIds);
    }
    loadData("menu");
  }, []);

  // get dishes
  useEffect(() => {
    async function loadData(path) {
      const dishesDB = await getCollection(path);
      setDishes(dishesDB);
    }

    if (dishCategory !== "") {
      loadData(`menu/${dishCategory}/content`);
      setRefreshNeeded(false);
    } else {
      setDishes([]);
    }
  }, [dishCategory, refreshNeeded]);

  // delete dish
  async function onDelete(dishId) {
    await deleteDocument(`menu/${dishCategory}/content`, dishId);
    setRefreshNeeded(true);
  }

  return (
    <div className="category-page-content-container">
      <div>
        <label htmlFor="select-categories">Categories:</label>
        <select
          name="select-categories"
          id="select-categories"
          onChange={(event) => setDishCategory(event.target.value)}
        >
          <option value="">Choose a category</option>
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="categories-cards-container">
        {dishes.map((dish) => (
          <li key={dish.id}>
            <div>
              <ProductCard dish={dish} category={dishCategory} />
              <button onClick={() => onDelete(dish.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

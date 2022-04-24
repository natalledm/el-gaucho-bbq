import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import "../styles/pages/delete-category-page.css";

import { getCollection, deleteDocument } from "../scripts/fireStoreDB";

export default function DeleteCategoryPage() {
  const [categories, setCategories] = useState([]);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState(false);

  // get categories
  useEffect(() => {
    async function loadData(path) {
      const categoriesDB = await getCollection(path);

      setCategories(categoriesDB);
    }
    loadData("menu");
    setIsRefreshNeeded(false);
  }, [isRefreshNeeded]);

  async function onDelete(categoryId) {
    await deleteDocument("menu", categoryId);
    setIsRefreshNeeded(true);
  }

  return (
    <div className="delete-category-container">
      <div className="delete-category-title-container">
        <h2>Choose the category to delete:</h2>
      </div>
      <div className="menu-content-container">
        <ul className="category-container">
          {categories.map((category) => (
            <li key={category.id} className="category-delete-item-container">
              <CategoryCard category={category} />
              <button
                onClick={() => onDelete(category.id)}
                className="main-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Link to={"/admin"} className="main-button button-back-admin">
        Back to Admin Page
      </Link>
    </div>
  );
}

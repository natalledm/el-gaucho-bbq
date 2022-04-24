import { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import InputField from "../components/InputField";
import fieldInfo from "../data/inputCategoryFieldInfo.json";
import "../styles/pages/create-category-page.css";

import { addDocumentWithId, getCollection } from "../scripts/fireStoreDB";

export default function CreateCategoryPage() {
  const [categories, setCategories] = useState([]);

  const [id, setId] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState(false);

  // get categories
  useEffect(() => {
    async function loadData(path) {
      const categoriesDB = await getCollection(path);

      setCategories(categoriesDB);
    }
    loadData("menu");
  }, [isRefreshNeeded]);

  async function onSubmit(event) {
    event.preventDefault();

    // check if input already exists in categories
    const maybeHasCategory = categories.find((category) => {
      if (category.id === id.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });

    if (maybeHasCategory !== undefined) {
      console.error("This category already exists!");
      setIsSuccessful(false);
      resetForm();
      return;
    }

    const newCategory = {
      imageUrl: imageUrl,
    };

    try {
      await addDocumentWithId("menu", newCategory, id.toLowerCase());
      setIsSuccessful(true);
      setIsRefreshNeeded(true);
    } catch (error) {
      console.log("The error was:", error);
      setIsSuccessful(false);
    }
    resetForm();
  }

  function resetForm() {
    setId("");
    setImageUrl("");
  }

  return (
    <div className="create-category-page-container">
      <div>
        <h2>Create category</h2>
      </div>
      <div>
        <h3>These are the current categories:</h3>
      </div>
      <div className="menu-content-container">
        <ul className="category-container">
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
      <h3>Create new category:</h3>
      <p>Note: Do not repeat a category that already exists.</p>
      <div>
        <form onSubmit={onSubmit}>
          <div className="input-and-label">
            <InputField fieldInfo={fieldInfo.id} state={[id, setId]} />
            <div className="input-and-label">
              <InputField
                fieldInfo={fieldInfo.imageUrl}
                state={[imageUrl, setImageUrl]}
              />
            </div>
            <div className="buttons">
              <button
                type="reset"
                value="Clear the form"
                onClick={resetForm}
                className="main-button button-clear"
              >
                Clear Form
              </button>
              <button className="main-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {isSuccessful ? <p>Category created!</p> : null}
    </div>
  );
}

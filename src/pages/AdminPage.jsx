import { useState, useEffect } from "react";
import { addDocument, getCollection } from "../scripts/fireStoreDB";

import "../styles/pages/admin-page.css";

export default function AdminPage() {
  // aviso de funcionou
  // apagar campos

  const [categories, setCategories] = useState([]);

  const [dishCategory, setDishCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

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

  function onSubmit(event) {
    event.preventDefault();

    const newDish = {
      name: name,
      description: description,
      price: price,
      ingredients: ingredients,
      image: image,
    };

    addDocument(`menu/${dishCategory}/content`, newDish);
  }

  return (
    <div className="create-dish-form-container">
      <h2>Create Dish</h2>
      <form onSubmit={onSubmit} className="create-dish-form">
        <div>
          <label htmlFor="select-categories">Categories:</label>
          <select
            name="select-categories"
            id="select-categories"
            onChange={(event) => setDishCategory(event.target.value)}
          >
            {categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Dish"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            cols="33"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            name="ingredients"
            id="ingredients"
            type="text"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            id="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image url:</label>
          <input
            name="image"
            id="image"
            type="text"
            placeholder="Paste the image link"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <button className="main-button form-submit-button">Submit</button>
      </form>
    </div>
  );
}

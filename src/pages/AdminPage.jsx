import { useState, useEffect } from "react";
import { addDocument, getCollection } from "../scripts/fireStoreDB";

export default function AdminPage() {
  // aviso de funcionou
  // apagar campos
  // labels
  // css
  // textarea para descrição

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dishCategory, setDishCategory] = useState("");

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
    <div>
      <h1>Create Dish</h1>
      <form onSubmit={onSubmit}>
        <select
          name="categories"
          id="select-categories"
          onChange={(event) => setDishCategory(event.target.value)}
        >
          {categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Dish"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          type="text"
          placeholder="Paste the image link"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

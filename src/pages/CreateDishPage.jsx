import { useState, useEffect } from "react";
import { addDocument, getCollection } from "../scripts/fireStoreDB";
import InputField from "../components/InputField";

import formInfo from "../data/inputDishFieldInfo.json";
import "../styles/pages/create-dish-page.css";

export default function CreateDishPage() {
  const [categories, setCategories] = useState([]);

  const [dishCategory, setDishCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  const [isSuccessful, setIsSuccessful] = useState(false);

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

  async function onSubmit(event) {
    event.preventDefault();

    const newDish = {
      name: name,
      description: description,
      price: price,
      ingredients: ingredients,
      image: image,
    };

    try {
      await addDocument(`menu/${dishCategory}/content`, newDish);
      setIsSuccessful(true);
    } catch (error) {
      console.log(error);
      setIsSuccessful(false);
    }
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice(1);
    setDescription("");
    setImage("");
    setIngredients("");
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
          <InputField fieldInfo={formInfo.name} state={[name, setName]} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            cols="33"
            placeholder="Description"
            required={true}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <InputField
            fieldInfo={formInfo.ingredients}
            state={[ingredients, setIngredients]}
          />
        </div>
        <div>
          <InputField fieldInfo={formInfo.price} state={[price, setPrice]} />
        </div>
        <div>
          <InputField fieldInfo={formInfo.image} state={[image, setImage]} />
        </div>
        <div>
          <button
            type="reset"
            value="Clear the form"
            onClick={resetForm}
            className="main-button form-button"
          >
            Clear Form
          </button>
          <button className="main-button form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      {isSuccessful ? <p>Dish created!</p> : null}
    </div>
  );
}

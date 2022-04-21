import { useEffect, useState } from "react";
import Header from "../components/Header";
import imageHeader from "../assets/images/picanha-emerson-vieira-unsplash.jpg";
import "../styles/pages/menu-page.css";

// scripts
import { getCollection } from "../scripts/fireStoreDB";
import CategoryCard from "../components/CategoryCard";

export default function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState(0);

  // load categories
  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);

      setMenu(data);
      setStatus(1);
    }
    loadData("menu");
  }, []);

  console.log("menu", menu);

  if (status === 0) return <p>Loading...</p>;
  if (status === 2) return <p>Error!</p>;

  return (
    <div>
      <div>
        <Header bgImg={imageHeader} title={"Menu"} />
      </div>
      <div className="menu-content-container">
        <ul className="category-container">
          <CategoryCard menu={menu} />
        </ul>
      </div>
    </div>
  );
}

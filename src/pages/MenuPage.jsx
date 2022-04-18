import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// scripts
import { getCollection } from "../scripts/fireStoreDB";

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

  const categories = menu.map((item) => {
    return (
      <li key={item.id}>
        <Link to={"/menu/" + item.id}>{item.id}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Menu</h1>
      <ul>{categories}</ul>
    </div>
  );
}

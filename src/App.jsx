// packages
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// scripts
import { getCollection } from "./scripts/fireStoreDB";

// components
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);

      setMenu(data);
      setStatus(1);
    }
    loadData("categories");
  }, []);

  if (status === 0) return <p>Loading...</p>;
  if (status === 2) return <p>Error!</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:course/:category" element={<CategoryPage />} />
        <Route
          path="menu/:course/:category/:productId"
          element={<ProductPage />}
        />
      </Routes>
    </Router>
  );
}

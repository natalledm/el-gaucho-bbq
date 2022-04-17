import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import MenuPage from "./pages/MenuPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
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

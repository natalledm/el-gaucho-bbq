// packages
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// components
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

import "./styles/base.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:category" element={<CategoryPage />} />
        <Route path="menu/:category/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

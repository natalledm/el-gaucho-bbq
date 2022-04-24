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
import Navbar from "./components/Navbar";
import CreateDishPage from "./pages/CreateDishPage";
import DeleteDishPage from "./pages/DeleteDishPage";

import "./styles/base.css";
import Footer from "./components/Footer";
import CreateCategoryPage from "./pages/CreateCategoryPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/create-dish" element={<CreateDishPage />} />
        <Route path="admin/delete-dish" element={<DeleteDishPage />} />
        <Route path="admin/create-category" element={<CreateCategoryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:category" element={<CategoryPage />} />
        <Route path="menu/:category/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

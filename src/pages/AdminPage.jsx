import { Link } from "react-router-dom";
import "../styles/pages/admin-page.css";

export default function AdminPage() {
  return (
    <div className="admin-page-container">
      <h1>Welcome to the Admin Page</h1>
      <h2>Choose an option:</h2>
      <div className="row-container">
        <h3>Create:</h3>
        <Link to={"create-dish"} className="main-button">
          Create a dish
        </Link>
        <Link to={"create-category"} className="main-button">
          Create category
        </Link>
      </div>
      <div className="row-container">
        <h3>Delete:</h3>
        <Link to={"delete-dish"} className="main-button">
          Delete dish
        </Link>
        <Link to={"delete-category"} className="main-button">
          Delete category
        </Link>
      </div>
    </div>
  );
}

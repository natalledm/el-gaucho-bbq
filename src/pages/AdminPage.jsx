import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div>
      <h2>Choose an option:</h2>
      <div>
        <h3>Create</h3>
        <Link to={"create-dish"} className="main-button">
          Create a dish
        </Link>
        <Link to={"create-category"} className="main-button">
          Create category
        </Link>
      </div>
      <div>
        <h3>Delete</h3>
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

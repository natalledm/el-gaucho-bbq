import "../styles/components/footer.css";
import logo from "../assets/icons/vector-40.png";
export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="El gaucho logo: a bovine horned head"
        className="logo"
      />
    </footer>
  );
}

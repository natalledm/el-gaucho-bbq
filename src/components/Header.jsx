import "../styles/components/header.css";

export default function Header({ bgImg, title }) {
  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="header-title">{title}</h1>
    </header>
  );
}

import chef from "../assets/images/cook-jeff-tumale-unsplash.jpg";
import "../styles/pages/about-page.css";

import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <div>
        <Header bgImg={chef} title={"About us"} />
      </div>
      <div className="content-about-container">
        <p>
          Our roots are our pride. We honor our heritage by providing an
          exceptional South American barbecue. Uruguai, Argentina, Brazil and
          other great countries have their love for barbecue a common place and
          the foundation for our family gatherings. We want to include you into
          our family celebration.
        </p>
        <button className="main-button">
          <Link to={"/contact/"}>Contact us</Link>
        </button>
      </div>
    </div>
  );
}

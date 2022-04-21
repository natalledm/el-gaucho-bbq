import { Link } from "react-router-dom";
import bgImg from "../assets/images/main-emerson-vieira-unsplash.jpg";
import Header from "../components/Header";
import "../styles/pages/home-page.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <div>
        <Header bgImg={bgImg} title={"Welcome to El Gaucho"} />
      </div>
      <div className="home-content-container">
        <section>
          <h2>Welcome </h2>
          <h2>to</h2> <h2>El Gaucho!</h2>
          <p>
            This is the restaurant made for meat lovers. Here you can be sure
            that you will taste meat done with expertise and excellency, with
            all the experience from our international chefs. Enjoy your meal!
          </p>
          <span className="main-button">
            <Link to={"/about/"}>About us</Link>
          </span>
        </section>
        <section>
          <h2>Menu</h2>
          <p>
            In our menu, you will find meals, drinks and desserts chosen by our
            chefs. Be sure to try, we change our dishes with the seasons!
          </p>
          <span className="main-button">
            <Link to={"/menu/"}>Check our menu</Link>
          </span>
        </section>
      </div>
    </div>
  );
}

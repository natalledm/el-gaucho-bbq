import Header from "../components/Header";
import Location from "../components/Location";
import { Link } from "react-router-dom";

import image from "../assets/images/welcome-ezequiel-garrido-unsplash.jpg";
import "../styles/pages/contact-page.css";

export default function ContactPage() {
  return (
    <div>
      <Header bgImg={image} title={"Contact us"} />
      <div className="contact-content-container">
        <section>
          <h2>Book a table</h2>
          <p>Call us during our work schedule: </p>
          <p>+46 31440380 or send us an email, info@elgaucho.se</p>
        </section>
        <section>
          <h2>Contact us</h2>
          <p>+46 31440380 </p>
          <p>info@elgauchorestaurant.se</p>
          <p>Drottningsgatan 1000, 17060</p>
          <p>Stockholm, Sweden</p>
        </section>
        <section>
          <h2>Opening hours</h2>
          <p> Weekdays — 12h-22h</p>
          <p>Weekends — 11h-23h</p>
        </section>
        <Location />
        <Link to={"/about/"} className="main-button">
          About us
        </Link>
      </div>
    </div>
  );
}

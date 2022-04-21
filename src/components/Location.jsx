import "../styles/components/location.css";

export default function Location() {
  return (
    <div className="location-content-container">
      <h1>Location</h1>
      <p>Drottningsgatan 1000, 17060</p>
      <p>Stockholm, Sweden</p>
      <div>
        <div className="map-container">
          <iframe
            title="El Gaucho restaurant"
            frameBorder="0"
            scrolling="no"
            src="https://www.openstreetmap.org/export/embed.html?bbox=17.99795508384705%2C59.365112834179556%2C18.005036115646366%2C59.36750184825468&amp;layer=mapnik&amp;marker=59.36630736224337%2C18.001495599746704"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

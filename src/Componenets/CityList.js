import "../css/CityList.css";
import lisbon_img from "../img/lisbon-3.jpg";
import sanFransico_img from "../img/san-francisco.jpg";
import berlin_img from "../img/berlin.jpg";
import london_img from "../img/london.jpg";
export default function CityList() {
  return (
    <div className="CityList">
      <div className="heading">
        <h1 className="top-heading">We're currently in these cities</h1>
        <div className="small-line"></div>
      </div>
      <div className="cities">
        <div className="city1">
          <img src={lisbon_img} alt="Lisbon Branch" height={180} width={270} />
          <h2>Lisbon</h2>
          <div className="reaction">
            <i class="fa-regular fa-face-smile-beam"></i>
            <p>1600+ happy eaters</p>
          </div>
          <div className="reaction">
            <i class="fa-solid fa-star"></i>
            <p>60+ top chefs</p>
          </div>
          <div className="reaction">
            <i class="fa-brands fa-twitter"></i>
            <p>@omnifood_lx</p>
          </div>
        </div>

        <div className="city2">
          <img
            src={sanFransico_img}
            alt="SanFransico Branch"
            height={180}
            width={270}
          />
          <h2>San Francisco</h2>
          <div className="reaction">
            <i class="fa-regular fa-face-smile-beam"></i>
            <p>3700+ happy eaters</p>
          </div>
          <div className="reaction">
            <i class="fa-solid fa-star"></i>
            <p>160+ top chefs</p>
          </div>
          <div className="reaction">
            <i class="fa-brands fa-twitter"></i>
            <p>@omnifood_sf</p>
          </div>
        </div>

        <div className="city1">
          <img src={berlin_img} alt="Berlin Branch" height={180} width={270} />
          <h2>Berlin</h2>
          <div className="reaction">
            <i class="fa-regular fa-face-smile-beam"></i>
            <p>2300+ happy eaters</p>
          </div>
          <div className="reaction">
            <i class="fa-solid fa-star"></i>
            <p>110+ top chefs</p>
          </div>
          <div className="reaction">
            <i class="fa-brands fa-twitter"></i>
            <p>@omnifood_berlin</p>
          </div>
        </div>

        <div className="city1">
          <img src={london_img} alt="London Branch" />
          <h2>London</h2>
          <div className="reaction">
            <i class="fa-regular fa-face-smile-beam"></i>
            <p>1200+ happy eaters</p>
          </div>
          <div className="reaction">
            <i class="fa-solid fa-star"></i>
            <p>50+ top chefs</p>
          </div>
          <div className="reaction">
            <i class="fa-brands fa-twitter"></i>
            <p>@omnifood_london</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Iphone from "../img/app-iPhone.png";
import playStore from "../img/download-app.svg";
import googlePlay from "../img/download-app-android.png";
import "../css/Working.css";
export default function Working() {
  return (
    <div className="working">
      <div className="heading">
        <h1>How it works - Simple as 1, 2, 3</h1>
        <div className="small-line"></div>
      </div>
      <div className="working-content">
        <div className="phone-image">
          <img src={Iphone} alt="Iphone APP" className="phone" />
        </div>
        <div className="content-rimage">
          <div>
            <div className="work-steps">1</div>
            <p>
              Choose the subscription plan that best fits your needs and sign up
              today.
            </p>
          </div>
          <div>
            <div className="work-steps">2</div>
            <p>
              Order your delicious meal using our mobile app or website. Or you
              can even call us!
            </p>
          </div>
          <div>
            <div className="work-steps">3</div>
            <p>
              Enjoy your meal after less than 20 minutes. See you the next time!
            </p>
          </div>
          <div className="link-logos">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img class="btn-app" src={playStore} alt="Apple" height={58} />
            </a>
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img class="btn-app" src={googlePlay} alt="GoglePLay" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

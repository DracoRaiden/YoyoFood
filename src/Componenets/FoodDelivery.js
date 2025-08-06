import "../css/FoodDelivery.css";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";

export default function FoodDelivery() {
  return (
    <div>
      <div className="working">
        <h1>Get Food Fast - Not Fast Food.</h1>
        <div className="small-line"></div>
        <p className="working-intro">
          Hello, we're YoYOFood, your new premium food delivery service. We know
          you're always busy. No time for cooking. So let us take care of that,
          we're really good at it, we promise!
        </p>
        <div className="content">
          <div className="b">
            <i class="fa-solid fa-infinity"></i>
            <h2>Upto 365 days/year</h2>
            <p>
              Never cook again! We really mean that. Our subscription plans
              include up to 365 days/year coverage. You can also choose to order
              more flexibly if that's your style.
            </p>
          </div>
          <div className="b">
            <i class="fa-regular fa-clock"></i>

            <h2>Ready in 20 minutes</h2>
            <p>
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home. We work with the best
              chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div className="b">
            <i class="fa-brands fa-envira"></i>
            <h2>100% organic</h2>
            <p>
              All our vegetables are fresh, organic and local. Animals are
              raised without added hormones or antibiotics. Good for your
              health, the environment, and it also tastes better!
            </p>
          </div>
          <div className="b">
            <i class="fa-solid fa-bag-shopping"></i>
            <h2>Order anything</h2>
            <p>
              We don't limit your creativity, which means you can order whatever
              you feel like. You can also choose from our menu containing over
              100 delicious meals. It's up to you!
            </p>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="box-img">
          <img src={img1} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img2} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img3} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img4} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img5} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img6} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img7} alt="food-offered" />
        </div>
        <div className="box-img">
          <img src={img8} alt="food-offered" />
        </div>
      </div>
    </div>
  );
}

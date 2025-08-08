import "../css/Customers.css";
import customer1 from "../img/customer-1.jpg";
import customer2 from "../img/customer-2.jpg";
import customer3 from "../img/customer-3.jpg";
export default function Customers() {
  return (
    <div className="Customers">
      <div className="heading">
        <h1 className="top-heading">Our Customers can't live without us</h1>
        <div className="small-line"></div>
      </div>
      <div className="reviews">
        <div className="review-1">
          <div className="quotes"></div>
          <div className="review-content">
            Omnifood is just awesome! I just launched a startup which leaves me
            with no time for cooking, so Omnifood is a life-saver. Now that I
            got used to it, I couldn't live without my daily meals!
          </div>
          <div className="review-by">
            <img src={customer1} alt="Customer-1" />
            <p>Alberto Duncan</p>
          </div>
        </div>
        <div className="review-2">
          <div className="quotes"></div>
          <div className="review-content">
            Inexpensive, healthy and great-tasting meals, delivered right to my
            home. We have lots of food delivery here in Lisbon, but no one comes
            even close to Omifood. Me and my family are so in love!
          </div>
          <div className="review-by">
            <img src={customer2} alt="Customer-1" />
            <p>Joana Silva</p>
          </div>
        </div>
        <div className="review-3">
          <div className="quotes"></div>
          <div className="review-content">
            I was looking for a quick and easy food delivery service in San
            Franciso. I tried a lot of them and ended up with Omnifood. Best
            food delivery service in the Bay Area. Keep up the great work!
          </div>
          <div className="review-by">
            <img src={customer3} alt="Customer-1" />
            <p>Milton Chapman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

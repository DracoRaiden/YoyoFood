import "../css/Subscriptions.css";

export default function Subscriptions() {
  return (
    <div className="Subscriptions">
      <div className="heading">
        <h1 className="top-heading">Start eating healthy today</h1>
        <div className="small-line"></div>
      </div>
      <div className="Subscription-packages">
        <div className="cards">
          <div className="section-1">
            <h2>Premium</h2>
            <div className="pricing">
              <h1>399$ </h1>
              <p>/ meal</p>
            </div>
            <p>That's only 13.30$ per meal</p>
          </div>
          <div className="section-2">
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>1 meal every day</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Order 24/7</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Access to newest creations</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Free delivery</p>
            </div>
          </div>
          <div className="section-3">
            <button className="btn-1 btn">Sign up now</button>
          </div>
        </div>
        <div className="cards">
          <div className="section-1">
            <h2>Pro</h2>
            <div className="pricing">
              <h1>149$ </h1>
              <p>/ meal</p>
            </div>
            <p>That's only 14.90$ per meal</p>
          </div>
          <div className="section-2">
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>1 meal 10 days/month</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Order 24/7</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Access to newest creations</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Free delivery</p>
            </div>
          </div>
          <div className="section-3">
            <button className="btn-2 btn">Sign up now</button>
          </div>
        </div>

        <div className="cards">
          <div className="section-1">
            <h2>Starter</h2>
            <div className="pricing">
              <h1>19$ </h1>
              <p>/ meal</p>
            </div>
            <p>That's only 19$ per meal</p>
          </div>
          <div className="section-2">
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>1 meal</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Order from 8 am to 12 pm</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-xmark"></i>
              <p>Access to newest creations</p>
            </div>
            <div className="checklist">
              <i class="fa-solid fa-check"></i>
              <p>Free delivery</p>
            </div>
          </div>
          <div className="section-3">
            <button className="btn-2 btn">Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

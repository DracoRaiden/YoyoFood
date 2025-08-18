import "../css/SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="SignUpPage">
      <div className="heading">
        <h1 className="top-heading">Start eating healthy today</h1>
        <div className="small-line"></div>
      </div>
      <div className="SignUp-inputs">
        <div className="input-name">
          <label for="uname">Name:</label>
          <input id="uname" placeholder="Your Name" type="text" />
        </div>
        <div className="input-email">
          <label for="uemail">Email:</label>
          <input id="uemail" placeholder="Your Email" type="email" />
        </div>
        <div className="input-source">
          <label for="usource">How did you find us:</label>
          <select id="usource">
            <option>Friend</option>
            <option>Website</option>
            <option selected>Facebook</option>
            <option>Advertisement</option>
          </select>
        </div>
        <div className="input-check">
          <label for="ucheck">Newsletter</label>
          <div className="checkbox-width">
            <input id="ucheck" type="checkbox" />
            <label for="option1" id="">
              Yes, Please
            </label>
          </div>
        </div>
        <div className="input-comments">
          <label for="ucomments">Drop us a Line:</label>
          <textarea id="ucomments" placeholder="Your Message" />
        </div>
        <div className="input-submit">
          <button className="btn-1 btn">Send it!</button>
        </div>
      </div>
    </div>
  );
}

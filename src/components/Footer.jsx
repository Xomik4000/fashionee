import points5 from "../assets/icons/vector-points-5.svg";
import points10 from "../assets/icons/vector-points-10.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import paypal from "../assets/icons/paypal.svg";
import payoneer from "../assets/icons/payoneer.svg";
import sendIcon from "../assets/icons/send.svg";
import logo from "../assets/icons/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-photo-5">
        <img className="footer-points" src={points5} alt="footer-photo" />
        <img className="footer-points-10" src={points10} alt="footer-photo" />
      </div>
      <div className="container">
        <div className="footer-info">
          <div className="column column-1">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="about-brand">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
              nostrud excepteur voluptate.
            </p>
            <div className="find-us">
              <p className="find-us-text">Find us here:</p>
              <ul className="find-us-links">
                <li className="find-us-link">
                  <a href="">FB</a>
                </li>
                <li className="line"></li>
                <li className="find-us-link">
                  <a href="">TW</a>
                </li>
                <li className="line"></li>
                <li className="find-us-link">
                  <a href="">INS</a>
                </li>
                <li className="line"></li>
                <li className="find-us-link">
                  <a href="">PT</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column column-2">
            <h5 className="title">About</h5>
            <ul className="custom-list">
              <li className="item">
                <a href="">About us</a>
              </li>
              <li className="item">
                <a href="">Collections</a>
              </li>
              <li className="item">
                <a href="">Shop</a>
              </li>
              <li className="item">
                <a href="">Blog</a>
              </li>
              <li className="item">
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="column column-3">
            <h5 className="title">Useful Links</h5>
            <ul className="custom-list">
              <li className="item">
                {" "}
                <a href="">Privacy Policy</a>
              </li>
              <li className="item">
                <a href="">Terms of use</a>
              </li>
              <li className="item">
                <a href="">Support</a>
              </li>
              <li className="item">
                <a href="">Shipping details</a>
              </li>
              <li className="item">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="column column-4">
            <h5 className="title">Newsletter</h5>
            <p className="newsletter-text">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </p>
            <div className="newsletter-form">
              <form action="">
                <label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                  <img src={sendIcon} alt="send" className="send-icon" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy All right reserved. Fashionee 2020</p>
          <div className="payment-methods-container">
            <p>Payment methods:</p>
            <ul className="payment-methods">
              <li className="payment-method">
                <img src={visa} alt="visa" />
              </li>
              <li className="payment-method">
                <img src={mastercard} alt="Master Card" />
              </li>
              <li className="payment-method">
                <img src={paypal} alt="PayPal" />
              </li>
              <li className="payment-method">
                <img src={payoneer} alt="Payoneer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

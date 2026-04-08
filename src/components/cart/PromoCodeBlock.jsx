import buttonArrow from "../../assets/icons/button-arrow.svg";
import {
  PROMO_INPUT_PLACEHOLDER,
  PROMO_SECTION_DESCRIPTION,
  PROMO_SECTION_TITLE,
} from "../../constants";

function PromoCodeBlock({ promoCode, onPromoCodeChange, onApplyPromo }) {
  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <h3 className="title">{PROMO_SECTION_TITLE}</h3>
        <p className="description">{PROMO_SECTION_DESCRIPTION}</p>
      </div>
      <div className="promo-code">
        <input
          type="text"
          name="promo-code"
          className="input"
          placeholder={PROMO_INPUT_PLACEHOLDER}
          value={promoCode}
          onChange={(e) => onPromoCodeChange(e.target.value)}
        />
        <div className="button-wrapper">
          <button type="button" className="button" onClick={onApplyPromo}>
            <img src={buttonArrow} alt="button-arrow" />
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
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
  );
}

export default PromoCodeBlock;

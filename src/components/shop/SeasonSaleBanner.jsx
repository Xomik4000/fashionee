import saleImage from "../../assets/images/season-sale.svg";

function SeasonSaleBanner() {
  return (
    <div className="season-sale">
      <a href="#">
        <img src={saleImage} alt="Season Sale" />
      </a>
    </div>
  );
}

export default SeasonSaleBanner;

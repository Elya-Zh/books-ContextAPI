import { useCurrency } from "../context/Context";
import "../styles.css";
const PriceSelector = () => {
  const { handleCurrency } = useCurrency();
  return (
    <div className="priceIcon">
      <img
        onClick={() => handleCurrency("USA")}
        className="icons"
        src="https://m.media-amazon.com/images/I/51XSXMvcp0L._AC_SX679_.jpg"
        alt=""
      />
      <img
        onClick={() => handleCurrency("EU")}
        className="icons"
        src="https://m.media-amazon.com/images/I/51Rre7jy18L._AC_UL640_FMwebp_QL65_.jpg"
        alt=""
      />
    </div>
  );
};
export default PriceSelector;

import "./styles.css";
import ListOfBooks from "./components/ListOfBooks";
import { data } from "./data";
import PriceSelector from "./components/PriceSelector";
import { GlobalProvider } from "./context/Context";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
export default function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CartProvider>
          <Cart />
          <PriceSelector />
          <ListOfBooks data={data} />
        </CartProvider>
      </GlobalProvider>
    </div>
  );
}

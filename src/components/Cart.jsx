import "../styles.css";

import { useCart } from "../context/CartContext";
const Cart = () => {
  const { items } = useCart();
  return (
    <div className="cart">
      <p>{items.length}</p>
    </div>
  );
};
export default Cart;

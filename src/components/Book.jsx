import "../styles.css";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import { useCart } from "../context/CartContext";
import { Button } from "reactstrap";

const Book = ({ book }) => {
  const { handleAdding, items } = useCart();
  const { currency } = useContext(GlobalContext);
  const isAdded = items.some((item) => item.id === book.id);
  return (
    <div className="book">
      <img src={book.image} alt="" />
      <p className="">{book.title}</p>
      <p className="">
        {currency === "USA" ? "$" : "€"}
        {book.price}
      </p>
      <Button onClick={() => handleAdding(book)}>
        {isAdded ? "Remove from the cart" : "Add to cart"}
      </Button>
    </div>
  );
};

export default Book;

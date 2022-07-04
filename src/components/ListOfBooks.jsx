import Book from "./Book";
import "../styles.css";
const ListOfBooks = ({ data }) => {
  return (
    <div className="listOfBooks">
      {data.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
};
export default ListOfBooks;

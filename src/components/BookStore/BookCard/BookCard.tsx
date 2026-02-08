import { Button } from "@/components/Button/Button";
import type { Book } from "@/models/Book";
import { useBookList } from "@/service/useBookList";
import style from './BookCard.module.scss';
import { useCart } from "@/hooks/useCart";

type Props = {
  book: Book,
}

export const BookCard = ({book}:Props) => {
  const {
    checkTextLength
  } = useBookList();

  const {
    addItemsToCart
  } = useCart()

  return (
    <div className={style['card']} key={book.id}>
      <img
        className={style['book-cover']}
        src={`/images/${book.cover_url}`}        
        alt={book.title}
      />
      <h3 title={book.title}>{checkTextLength(book.title)}</h3>
      <p>{checkTextLength(book.author)}</p>

      <div className={style['book-actions']}>
        <p>R$ {book.price}</p>
        <Button onClick={() => addItemsToCart(book)} kind="primary">Comprar</Button>
      </div>

    </div>
  );
};

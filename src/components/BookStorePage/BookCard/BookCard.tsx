import { Button } from '@/components/misc/Button/Button';
import type { Book } from '@/models/Book';
import { useBookList } from '@/service/useBookList';
import style from './BookCard.module.scss';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

type Props = {
  book: Book;
};

export const BookCard = ({ book }: Props) => {
  const [active, setActive] = useState(false);

  const { checkTextLength } = useBookList();

  const { addItemsToCart } = useCart();

  useEffect(() => {
    if (!active) return;
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, [active]);

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
        <Button
          onClick={() => {
            addItemsToCart(book);
            setActive(true);
          }}
          kind='primary'
          className={`${style['addbook-btn']} ${active ? style['active'] : ''}`}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

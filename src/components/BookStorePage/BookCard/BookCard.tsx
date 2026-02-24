import { Button } from '@/components/misc/Button/Button';
import type { Book } from '@/models/Book';
import { useBookList } from '@/service/useBookList';
import style from './BookCard.module.scss';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';
import Currency from '@/utils/currency'

type Props = {
  book: Book;
  onClick: () => void;
};

export const BookCard = ({ book, onClick }: Props) => {
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
      <Button kind='ghost' onClick={onClick} style={{ position: 'relative' }}>
        <img
          className={style['book-cover']}
          src={book.coverUrl || ''}
          alt={book.title}
        />
        <div className={style['mask']}></div>
      </Button>
      <h3 title={book.title} className={style['book-title']}>
        {checkTextLength(book.title)}
      </h3>
      <p className={style['book-author']}>{checkTextLength(book.author)}</p>

      <div className={style['book-actions']}>
        <p>R$ {Currency.toString(book.price)}</p>
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

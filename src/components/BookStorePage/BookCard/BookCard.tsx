import { Button } from '@/components/misc/Button/Button';
import type { Book } from '@/models/Book';
import { useBookList } from '@/service/useBookList';
import style from './BookCard.module.scss';
import { useCart } from '@/hooks/useCart';
import { useEffect, useRef, useState } from 'react';
import Currency from '@/utils/currency';

type Props = {
  book: Book;
  onClick: () => void;
};

export const BookCard = ({ book, onClick }: Props) => {
  const [active, setActive] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLButtonElement>(null);

  const { checkTextLength } = useBookList();

  const { addItemsToCart } = useCart();

  useEffect(() => {
    if (!active) return;
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }, [active]);

  useEffect(() => {
    if (!imageRef.current) return;

    const imageRefCopy = imageRef.current;

    const onLoad = () => {
      if (imageContainerRef.current)
        imageContainerRef.current.classList.add(style['loaded']);
    };

    if (imageRefCopy.complete) {
      onLoad();
    } else {
      imageRefCopy.addEventListener('load', onLoad);
    }

    return () => {
      if (imageRefCopy) imageRefCopy.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div className={style['card']} key={book.id}>
      <Button
        ref={imageContainerRef}
        kind='ghost'
        onClick={onClick}
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: `url(https://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg)`,
        }}
        className={style['blur-div']}
      >
        <img
          ref={imageRef}
          className={style['book-cover']}
          src={book.coverUrl || ''}
          alt={book.title}
          loading='lazy'
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

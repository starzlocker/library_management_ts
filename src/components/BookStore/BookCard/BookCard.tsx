import type { Book } from "@/models/Book";
import { useBookList } from "@/service/useBookList";

type Props = {
  book: Book,
}

export const BookCard = ({book}:Props) => {
  const {
    getImageUrl,
    checkTextLength
  } = useBookList();

  return (
    <div className='card' key={book.id}>
      <img
        className='book-cover'
        src={
          book.cover_url
            ? getImageUrl(book.cover_url)
            : getImageUrl('nocover.jpg')
        }
        alt={book.title}
      />
      <h3 title={book.title}>{checkTextLength(book.title)}</h3>
      <p>{checkTextLength(book.author)}</p>
    </div>
  );
};

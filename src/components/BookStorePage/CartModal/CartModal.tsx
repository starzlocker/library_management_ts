import { Modal } from '@/components/misc/Modal/Modal';
import { useCart } from '@/hooks/useCart';
import { useMemo } from 'react';
import styles from './CartModal.module.scss';
import { AmountSelector } from '@/components/misc/AmountSelector/AmountSelector';
import { Button } from '@/components/misc/Button/Button';
import { CloseIcon } from '@/components/misc/CloseIcon';
import Currency from '@/utils/currency';

export const CartModal = () => {
  const {
    isOpen,
    setIsOpen,
    shoppingCart,
    addItemsToCart,
    decrementItem,
    removeItemFromCart,
  } = useCart();

  const total = useMemo(() => {
    return Object.values(shoppingCart).reduce(
      (acc, book) => acc + book.price * book.amount,
      0,
    );
  }, [shoppingCart]);

  return (
    <Modal
      isOpen={isOpen}
      title='Carrinho de Compras'
      beforeClose={() => setIsOpen(false)}
    >
      <section className={styles['cart-modal-container']}>
        <ul className={styles['cart-modal-list']}>
          {Object.values(shoppingCart).map((book) => (
            <li key={book.id} className={styles['cart-modal-item']}>
              <img
                src={book.coverUrl || 'images/nocover.jpg'}
                alt={book.title}
                className={styles['cover']}
              />
              <div className={styles['book-info']}>
                <p className={styles['title']}>{book.title}</p>
                <p className={styles['price']}>
                  <strong>R$ {Currency.toString(book.price)}</strong>
                </p>
                <AmountSelector
                  amount={book.amount}
                  onIncrement={() => addItemsToCart(book)}
                  onDecrement={() => decrementItem(book.id)}
                  className={styles['book-info-amount']}
                />
              </div>
              <Button kind='ghost' onClick={() => removeItemFromCart(book.id)}>
                <CloseIcon size={14} />
              </Button>
            </li>
          ))}
        </ul>

        <p className={styles['cart-modal-total']}>
          Total: <strong>R$ {Currency.toString(total)}</strong>
        </p>
      </section>
    </Modal>
  );
};

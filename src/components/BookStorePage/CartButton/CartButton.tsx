import { Button } from '@/components/misc/Button/Button';
import { CartIcon } from '@/components/misc/CartIcon';
import { useCart } from '@/hooks/useCart';
import { useMemo } from 'react';
import style from './CartButton.module.scss';

export const CartButton = () => {
  const { setIsOpen, shoppingCart } = useCart();

  const openCartList = () => {
    setIsOpen(true);
  };

  const totalItems = useMemo(
    () =>
      Object.values(shoppingCart).reduce(
        (acc, book) => (acc += book.amount),
        0,
      ),
    [shoppingCart],
  );

  return (
    <div className={style['cart-button-container']}>
      <Button kind='ghost' onClick={openCartList} style={{width: '40px', height: '40px'}}>
        <CartIcon color='black' />
      </Button>
      <div
        className={`${style['cart-button-total']} ${totalItems > 0 ? style['active'] : style['inactive']}`}
      >
        {totalItems > 99 ? '99+' : totalItems}
      </div>
    </div>
  );
};

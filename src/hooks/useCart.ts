import { useLocalStorage } from './useLocalStorage';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import type { Book } from '@/models/Book';

const SHOPPING_CART = 'shoppingCart';

export const useCart = () => {
  const { writeData } = useLocalStorage();

  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('Contexto deve ter um Provider.');
  }

  const { shoppingCart, setShoppingCart, isOpen, setIsOpen } = ctx;

  function addItemsToCart(items: Book | Book[]): void {
    const booksToAdd = Array.isArray(items) ? items : [items];

    const newShoppingCart = { ...shoppingCart };
    for (const book of booksToAdd) {
      if (book.id in newShoppingCart) {
        if(newShoppingCart[book.id].amount < 100) newShoppingCart[book.id].amount += 1;
      } else {
        newShoppingCart[book.id] = { ...book, amount: 1 };
      }
    }

    setShoppingCart(() => {
      writeData(SHOPPING_CART, newShoppingCart);
      return newShoppingCart;
    });
  }

  const removeItemFromCart = (id: number) => {
    const newShoppingCart = { ...shoppingCart };

    delete newShoppingCart[id];

    setShoppingCart(() => {
      writeData(SHOPPING_CART, newShoppingCart);
      return newShoppingCart;
    });
  };

  const decrementItem = (id: number) => {
    const newShoppingCart = { ...shoppingCart };
    newShoppingCart[id].amount -= 1 
    if (!newShoppingCart[id].amount) return removeItemFromCart(id);

    setShoppingCart(() => {
      writeData(SHOPPING_CART, newShoppingCart);
      return newShoppingCart;
    });
  }

  const clearCart = () => {
    setShoppingCart(() => {
      writeData(SHOPPING_CART, {});
      return [];
    });
  };

  return {
    shoppingCart,
    isOpen,
    setIsOpen,
    addItemsToCart,
    removeItemFromCart,
    decrementItem,
    clearCart,
  };
};

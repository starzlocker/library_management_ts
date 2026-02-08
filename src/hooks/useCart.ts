import { useLocalStorage } from "./useLocalStorage";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import type { Book } from "@/models/Book";

const SHOPPING_CART = 'shoppingCart'

export const useCart = () => {

  const {writeData} = useLocalStorage();

  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('Contexto deve ter um Provider.')
  }

  const {
    shoppingCart,
    setShoppingCart,
    isOpen,
    setIsOpen
  } = ctx;

  function addItemsToCart(items: Book | Book[]):void {
    const booksToAdd = (Array.isArray(items) ? items : [items]);

    const newBookMap = {...shoppingCart};
    for(const book of booksToAdd) {
      if(book.id in newBookMap) { 
         newBookMap[book.id].quantity += 1;
      } else {
        newBookMap[book.id] = {...book, quantity: 1};
      }
    }

    setShoppingCart(() => {
      writeData(SHOPPING_CART, newBookMap, true);
      return newBookMap;
    })
  }
  
  const removeItemFromCart = (id:number) => {
    const newBookMap = {...shoppingCart};

    delete newBookMap[id];
    
    setShoppingCart(() => {
      writeData(SHOPPING_CART, newBookMap, true);
      return newBookMap
    })

  }

  const clearCart = () => {
    setShoppingCart(() => {
      writeData(SHOPPING_CART, {})
      return [];
    })
  }

  return {
    shoppingCart,
    isOpen,
    setIsOpen,
    addItemsToCart,    
    removeItemFromCart,
    clearCart
  }
}
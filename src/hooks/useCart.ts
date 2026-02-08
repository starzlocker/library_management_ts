import { useLocalStorage } from "./useLocalStorage";
import { useContext } from "react";
import { CartContext, type ShoppingCartItem } from "@/context/CartContext";
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
    const booksToAdd = (Array.isArray(items) ? items : [items]).map(item => ({[item.id.toString()]: item}));

    const currentBooks = {...shoppingCart};
    for(const [k, v] of Object.entries(booksToAdd)) {


      if(k in currentBooks) {
         currentBooks[k].quantity += 1;
      } else {
        currentBooks[book.id] = {...book, quantity: 1};
      }
    }

    setShoppingCart(prev => {
      writeData(SHOPPING_CART, {...shoppingCart, ...books}, true);
      return [...prev, ...books];
    })
  }
  
  const removeItemFromCart = (id:number) => {
    const filtered = shoppingCart.filter(b => b.id !== id)
    setShoppingCart(() => {
      writeData(SHOPPING_CART, filtered);
      return filtered
    })

  }

  const clearCart = () => {
    setShoppingCart(() => {
      writeData(SHOPPING_CART, [])
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
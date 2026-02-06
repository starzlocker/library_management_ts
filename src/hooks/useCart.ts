import type { Book } from "@/models/Book";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const SHOPPING_CART = 'shoppingCart'

export const useCart = () => {

  const {getData, writeData} = useLocalStorage();

  const [shoppingCart, setShoppingCart] = useState(getData<Book[]>(SHOPPING_CART) || []);

  function addItemsToCart(items: Book | Book[]):void {
    const books = Array.isArray(items) ? items : [items];
    setShoppingCart(prev => {
      writeData(SHOPPING_CART, [...shoppingCart, ...books]);
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
    addItemsToCart,    
    removeItemFromCart,
    clearCart
  }
}
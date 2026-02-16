import { type Book } from "@/models/Book";
import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ShoppingCartItem extends Book {
  amount: number
}

export type ShoppingCart = Record<number, ShoppingCartItem>


type CartContext = {
  shoppingCart: ShoppingCart,
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart>>,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CartContext = createContext<CartContext | null>(null)
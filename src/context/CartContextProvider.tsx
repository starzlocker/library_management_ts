import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartContext, type ShoppingCartItem } from "./CartContext"
import { useMemo, useState, type ReactNode } from "react";

const SHOPPING_CART = 'shoppingCart'

type Props = {
  children: ReactNode
}

export const CartContextProvider = ({children}:Props) => {

  const {getData} = useLocalStorage();

  const [shoppingCart, setShoppingCart] = useState(
    new Set(
      (getData<ShoppingCartItem[]>(SHOPPING_CART, true) || []).map(item => ({[item.id]: item}))
    )
  );
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({
    shoppingCart,
    isOpen,
    setShoppingCart,
    setIsOpen
  }), [shoppingCart, isOpen])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
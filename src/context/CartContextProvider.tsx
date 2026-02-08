import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartContext, type ShoppingCart, type ShoppingCartItem } from "./CartContext"
import { useMemo, useState, type ReactNode } from "react";

const SHOPPING_CART = 'shoppingCart'

type Props = {
  children: ReactNode
}

export const CartContextProvider = ({children}:Props) => {

  const {getData} = useLocalStorage();

  const initialData = (
    getData<ShoppingCartItem[]>(SHOPPING_CART, true) || []
  ).reduce<Record<string, ShoppingCartItem>>((acc, item) => {
    acc[item.id.toString()] = item;
    return acc;
  }, {});

  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(initialData);
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
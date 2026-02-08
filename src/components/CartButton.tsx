import { Button } from "@/components/Button/Button"
import { CartIcon } from "./CartIcon"
import { useCart } from "@/hooks/useCart"

export const CartButton = () => {
  const {
    setIsOpen
  } = useCart()

  const openCartList = () => {
    setIsOpen(true);
  }
  
  return (
    <Button kind="ghost" onClick={openCartList}>
      <CartIcon color="black"/>
    </Button>
  )
}
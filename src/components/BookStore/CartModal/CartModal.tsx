import { Modal } from "@/components/Modal/Modal"
import { useCart } from "@/hooks/useCart"
import { useMemo } from "react"

export const CartModal = () => {
  const {
    isOpen,
    setIsOpen,
    shoppingCart,
    addItemsToCart,
    removeItemFromCart,
    clearCart
  } = useCart()

  const total = useMemo(() => {
    return shoppingCart.reduce((acc, book) => acc + book.price, 0);
  }, [shoppingCart])

  return (
    <Modal isOpen={isOpen} title="Carrinho de Compras">
      <ul>
        {shoppingCart.map(book => (
          <li key={book.id}>
            <p>{book.price}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>

      <p>Total: R$ {total.toFixed(2)}</p>
      
    </Modal>
  )
}
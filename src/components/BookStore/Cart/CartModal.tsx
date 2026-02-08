import { Modal } from "@/components/Modal/Modal"
import { useCart } from "@/hooks/useCart"
import { useMemo } from "react"
import styles from './CartModal.module.scss'

export const CartModal = () => {
  const {
    isOpen,
    setIsOpen,
    shoppingCart,
  } = useCart()

  const total = useMemo(() => {
    return Object.values(shoppingCart).reduce((acc, book) => acc + book.price, 0);
  }, [shoppingCart])

  return (
    <Modal isOpen={isOpen} title="Carrinho de Compras" beforeClose={() => setIsOpen(false)}>
      <section className={styles['cart-modal-container']}>
        <ul className={styles['cart-modal-list']}>
          {Object.values(shoppingCart).map(book => (
            <li key={book.id} className={styles['cart-modal-item']}>
              <p>{book.quantity}</p>
              <p><strong>R$ {book.price}</strong></p>
              <p>{book.title}</p>
            </li>
          ))}
        </ul>

        <p className={styles['cart-modal-total']}>Total: <strong>R$ {total.toFixed(2)}</strong></p>
      </section>
      
    </Modal>
  )
}
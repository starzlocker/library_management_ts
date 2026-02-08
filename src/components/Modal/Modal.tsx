import { useEffect, useRef, type ReactNode } from 'react';
import styles from './Modal.module.scss';

type Props = {
  children: ReactNode,
  isOpen: boolean,
  title: string,
  beforeClose: () => void
}

export const Modal = ({children, isOpen, title, beforeClose=(() => {})}:Props) => {
  const ref = useRef<HTMLDialogElement|null>(null)

  useEffect(() => {
    if (ref.current) {
      return isOpen ? ref.current.showModal() : ref.current.close();
    }
  }, [isOpen])

  const handleClose = () => {
    beforeClose();

    return ref.current ? ref.current.close() : null;
  }

  return (
    <dialog ref={ref} className={styles['modal']}>
      <section className="form-header">
        <h2>{title}</h2>
        <button
          onClick={handleClose}
          className="close-form-btn"
        >
          X
        </button>
      </section>
      <hr></hr>
      <section>
        {children}
      </section>
    </dialog>
  )
}
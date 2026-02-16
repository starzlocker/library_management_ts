import {
  useEffect,
  useRef,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '../CloseIcon';

interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
  children?: ReactNode;
  isOpen: boolean;
  title?: string;
  beforeClose?: () => void;
}

export const Modal = ({
  children,
  isOpen,
  title,
  beforeClose = () => {},
  className,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      return isOpen ? ref.current.showModal() : ref.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    beforeClose();

    return ref.current ? ref.current.close() : null;
  };

  return (
    <dialog
      ref={ref}
      closedby='any'
      onClose={handleClose}
      className={`${styles['modal']} ${className || ''}`}
      {...props}
    >
      <section className={styles['modal-header']}>
        <h2>{title}</h2>
        <button onClick={handleClose} className={styles['modal-close-btn']}>
          <CloseIcon size={'12px'} />
        </button>
      </section>

      {children}
    </dialog>
  );
};

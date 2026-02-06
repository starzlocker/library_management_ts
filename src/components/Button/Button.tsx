import type { MouseEventHandler, ReactNode } from "react"
import styles from './Button.module.scss';

type Props = {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  type: 'primary' | 'secondary' | 'danger',
  style?: Record<string, string>,
}

export const Button = ({children, onClick, type, style}:Props) => {

  return (
    <button type="button" onClick={onClick} className={`${styles[type]}`} style={style}>
      {children}
    </button>
  )
}
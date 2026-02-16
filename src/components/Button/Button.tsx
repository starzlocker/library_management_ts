import type { ForwardedRef, MouseEventHandler, ReactNode } from "react"
import styles from './Button.module.scss';
import { type ComponentPropsWithoutRef } from 'react';


interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>,
  kind: 'primary' | 'secondary' | 'danger' | 'ghost',
  ref?: ForwardedRef<HTMLButtonElement>
}

export const Button = ({children, onClick, kind, ref, className, ...props}:ButtonProps) => {

  return (
    <button ref={ref} type="button" onClick={onClick} className={`${styles[kind]} ${className || ''}`} {...props}>
      {children}
    </button>
  )
}
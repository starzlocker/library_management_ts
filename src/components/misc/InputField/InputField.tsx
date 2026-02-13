import styles from './_.module.scss'
import { type ComponentPropsWithoutRef, type ForwardedRef } from 'react';

interface InputFieldProps extends ComponentPropsWithoutRef<'div'> {
  label: string, 
  id: string, 
  name: string, 
  ref?: ForwardedRef<HTMLInputElement>
  onChange: () => void,
  onBlur?: () => void
}

export const InputField = ({label, id, name, ref, onChange, onBlur, className, ...props}:InputFieldProps) => {
  return (
    <div className={`${styles['field-container']} ${className || ''}`} {...props}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} name={name} type='text' onChange={onChange} onBlur={onBlur}/>
    </div>
  );
};

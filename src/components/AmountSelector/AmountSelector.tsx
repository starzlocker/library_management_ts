import type { ComponentPropsWithoutRef } from "react";
import { AddIcon } from '../AddIcon';
import { Button } from '../Button/Button';
import { CloseIcon } from '../CloseIcon';
import { MinusIcon } from '../MinusIcon';
import styles from './_.module.scss';

interface AmountSelectorProps extends ComponentPropsWithoutRef<'div'> {
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const AmountSelector = ({ amount, onIncrement, onDecrement, className, ...props }: AmountSelectorProps) => {
  return (
    <div className={`${styles['amount']} ${className || ''}`} {...props}>
      <Button
        className={styles['remove-button']}
        onClick={onDecrement}
        kind='ghost'
      >
        {amount === 1 ? <CloseIcon size={18} color='red'/> : <MinusIcon size={18} color='red'/>}
      </Button>

      <input type='text' pattern='/[0-9]*/' value={amount} disabled />
      <Button
        className={styles['add-button']}
        onClick={() => onIncrement()}
        kind='ghost'
      >
        <AddIcon size={18} color='blue'/>
      </Button>
    </div>
  );
};

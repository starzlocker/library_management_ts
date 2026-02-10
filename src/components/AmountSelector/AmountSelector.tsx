import { AddIcon } from "../AddIcon"
import { Button } from "../Button/Button"
import { CloseIcon } from "../CloseIcon"
import styles from './_.module.scss'

type Props = {
  amount: number
}

export const AmountSelector = ({amount}:Props) => {
return (
  <div className={styles['amount']}>
      <Button className={styles['remove-button']} onClick={() => {}} kind="ghost"><CloseIcon size={11.4}/></Button>
      <input type="number" min={0} disabled value={amount}/>
      <Button className={styles['add-button']} onClick={() => {}} kind="ghost"><AddIcon /></Button>
    </div>
  )
}
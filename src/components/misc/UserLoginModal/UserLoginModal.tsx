import { Modal } from "../Modal/Modal"
import styles from './_.module.scss'
import { useState } from "react"
import { UserLoginForm } from "./UserLoginForm"
import { UserRegistrationForm } from "./UserRegistrationForm"
import { BookShelfIcon } from "../BookShelfIcon"


type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const UserLoginModal = ({isOpen, onClose}: Props) => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  return (
    <Modal isOpen={isOpen} beforeClose={() => {
      setIsSigningUp(false);
      onClose()
    }} className={styles['user-login-container']}>
      {isSigningUp ? <UserRegistrationForm openLoginForm={() => setIsSigningUp(false)}/> : <UserLoginForm openSignUpForm={() => setIsSigningUp(true)}/>}
      <div className={styles['logo']}>
        <BookShelfIcon  size={'70px'}/>
      </div>
    </Modal>
  )
}
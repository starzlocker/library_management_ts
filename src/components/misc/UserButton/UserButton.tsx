import { UserIcon } from "../UserIcon"
import { Button } from "../Button/Button"
type Props = {
  handleClick: () => void
}
export const UserButton = ({handleClick}:Props) => {

  return (
    <Button kind="ghost" style={{width: '40px', height: '40px'}} onClick={() => handleClick()}>     
       <UserIcon />
    </Button>
  )
}
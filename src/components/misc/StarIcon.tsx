import type { ComponentPropsWithoutRef } from "react";

interface StarIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const StarIcon = ({size='24px', color="#000", className, ...props}:StarIconProps) => {
  return (
    <svg
      viewBox="0 0 18 18"      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}   
      height={size}  
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.705 17.886L10 15.97l4.295 1.915a1 1 0 001.402-1.019l-.494-4.677 3.148-3.493a1 1 0 00-.535-1.647l-4.6-.976L10.866 2a1 1 0 00-1.732 0l-2.35 4.074-4.6.976a1 1 0 00-.535 1.647l3.148 3.494-.494 4.676a1 1 0 001.402 1.018zm3.888-3.924l-3.119 1.39.359-3.395a1 1 0 00-.252-.774L4.295 8.646l3.34-.708a1 1 0 00.66-.478L10 4.502l1.706 2.958a1 1 0 00.659.478l3.34.708-2.286 2.537a1 1 0 00-.252.774l.359 3.396-3.119-1.39a1 1 0 00-.814 0z"
        fill={color}
        className={className}
      />
    </svg>
  )
}
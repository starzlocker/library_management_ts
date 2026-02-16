import type { ComponentPropsWithoutRef } from "react";

interface MinusIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const MinusIcon = ({size='24px', color="#0F0F0F", ...props}:MinusIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}   
      height={size}  
      {...props}
    >
      <path
        d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        fill={color}
      />
    </svg>
  )
}
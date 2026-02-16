/*

      <path d="M16.417 9.583A7.917 7.917 0 118.5 1.666a7.917 7.917 0 017.917 7.917zm-6.24-.064H6.81a2.528 2.528 0 00-2.692 2.303v1.51a.794.794 0 00.792.792h7.166a.794.794 0 00.792-.791V11.82a2.528 2.528 0 00-2.692-2.302zM6.14 6.374a2.353 2.353 0 102.353-2.353A2.353 2.353 0 006.14 6.374z" />

      */

import type { ComponentPropsWithoutRef } from "react";

interface UserIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const UserIcon = ({size='24px', color="#0F0F0F", ...props}:UserIconProps) => {
  return (
    <svg
      viewBox="-1 0 19 19"     
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}   
      height={size}  
      {...props}
    >
      <path
        d="M16.417 9.583A7.917 7.917 0 118.5 1.666a7.917 7.917 0 017.917 7.917zm-6.24-.064H6.81a2.528 2.528 0 00-2.692 2.303v1.51a.794.794 0 00.792.792h7.166a.794.794 0 00.792-.791V11.82a2.528 2.528 0 00-2.692-2.302zM6.14 6.374a2.353 2.353 0 102.353-2.353A2.353 2.353 0 006.14 6.374z"
        fill={color}
      />
    </svg>
  )
}
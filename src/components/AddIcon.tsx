import type { ComponentPropsWithoutRef } from "react";

interface AddIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const AddIcon = ({size='24px', color="#0F0F0F", ...props}:AddIconProps) => {
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
        d="M13 3a1 1 0 10-2 0v8H3a1 1 0 100 2h8v8a1 1 0 102 0v-8h8a1 1 0 100-2h-8V3z"
        fill={color}
      />
    </svg>
  )
}
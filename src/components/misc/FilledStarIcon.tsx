import type { ComponentPropsWithoutRef } from "react";

interface FilledStarIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const FilledStarIcon = ({size='24px', color="#000", className, ...props}:FilledStarIconProps) => {
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
        d="M10 15.97l-4.295 1.915a1 1 0 01-1.402-1.018l.494-4.677L1.65 8.697a1 1 0 01.535-1.647l4.6-.976L9.134 2a1 1 0 011.732 0l2.35 4.074 4.6.976a1 1 0 01.535 1.647l-3.148 3.494.494 4.676a1 1 0 01-1.402 1.018L10 15.972z"
        fill={color}
        className={className}
      />
    </svg>
  )
}
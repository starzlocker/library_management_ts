import { type ComponentPropsWithoutRef } from 'react';


interface CartIconProps extends ComponentPropsWithoutRef<'svg'> {
  kind?: 'add' | 'empty' | 'remove'
  size?: number | string; 
}

const path = {
  empty: "M6.3 5H21l-2 7H7.377M20 16H8L6 3H3m6 17a1 1 0 11-2 0 1 1 0 012 0zm11 0a1 1 0 11-2 0 1 1 0 012 0z",
  add: "M21 5l-2 7H7.377M20 16H8L6 3H3m13 2.5h-2.5m0 0H11m2.5 0V8m0-2.5V3M9 20a1 1 0 11-2 0 1 1 0 012 0zm11 0a1 1 0 11-2 0 1 1 0 012 0z",
  remove: "M21 5l-2 7H7.377M20 16H8L6 3H3m13 3h-5M9 20a1 1 0 11-2 0 1 1 0 012 0zm11 0a1 1 0 11-2 0 1 1 0 012 0z"
}


export const CartIcon = ({ 
  kind='empty',
  size = 20,            
  stroke = "currentColor", 
  ...props              
}: CartIconProps) => {

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
        d={path[kind]}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

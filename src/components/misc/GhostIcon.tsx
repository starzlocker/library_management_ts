import type { ComponentPropsWithoutRef } from "react";

interface GhostIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const GhostIcon = ({size='24px', color="#000", className, ...props}:GhostIconProps) => {
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
        d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <ellipse cx={15} cy={9.5} rx={1} ry={1.5} fill="#1C274C" />
      <ellipse cx={9} cy={9.5} rx={1} ry={1.5} fill="#1C274C" />
      <path
        d="M22 12.3C22 6.613 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 012.896.186 2.822 2.822 0 003.208 0l.353-.242a1.836 1.836 0 012.086 0l.353.242a2.822 2.822 0 003.208 0 2.82 2.82 0 012.897-.186c1.148.591 2.499-.269 2.499-1.591v-3.711"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
import type { ComponentPropsWithoutRef } from "react";

interface StarIconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: number | string; 
}

export const StarIcon = ({size='24px', color="#e0d502", ...props}:StarIconProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.15 2.365c.68-1.651 3.02-1.651 3.7 0l2.336 5.674 5.24.308c1.837.108 2.565 2.432 1.118 3.569l-4.362 3.427 1.738 4.926c.645 1.827-1.423 3.411-3.019 2.314L12 19.213l-4.901 3.37c-1.596 1.097-3.664-.487-3.02-2.314l1.74-4.926-4.363-3.427C.01 10.779.736 8.455 2.575 8.346l5.24-.307 2.336-5.674zm1.85.761L9.186 9.961l-6.494.382 5.49 4.314-2.216 6.278L12 16.787l6.034 4.148-2.216-6.278 5.49-4.314-6.494-.382L12 3.126z"
          fill={color}
      />
    </svg>
  )
}
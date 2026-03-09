import type { ComponentPropsWithoutRef } from "react";

interface DeadIconProps extends ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export const DeadIcon = ({
  size = "24px",
  color = "#000",
  className,
  ...props
}: DeadIconProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <path stroke="#1C274C" strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M32 3a29 29 0 1029 29A29 29 0 0032 3zm0 56a27 27 0 1127-27 27 27 0 01-27 27zm16-25H16a1 1 0 000 2h16v5c0 4.41 3.14 8 7 8s7-3.59 7-8v-5h2a1 1 0 000-2zm-4 7c0 3.31-2.24 6-5 6s-5-2.69-5-6v-5h10zm-7.71-14.71l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L43.41 22l4.3 4.29a1 1 0 010 1.42 1 1 0 01-1.42 0L42 23.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42zm-20 0l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L23.41 22l4.3 4.29a1 1 0 010 1.42 1 1 0 01-1.42 0L22 23.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42z"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

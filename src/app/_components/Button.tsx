import React from "react";
import styles from "@/app/_sass/button.module.scss";

interface ButtonTypes {
  children: React.ReactNode | string;
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, className, onClick, type, disabled }: ButtonTypes) {
  return (
    <button
      className={`${className} ${styles.buttonDefault}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

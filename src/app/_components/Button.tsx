import React from "react";
import styles from "@/app/sass/button.module.scss";

interface ButtonTypes {
  children: React.ReactNode | string;
  className?: string;
  type?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: ButtonTypes) {
  return (
    <button
      className={`${className} ${styles.buttonDefault}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

import React from "react";
import styles from "@/app/sass/button.module.scss";

interface ButtonTypes {
  children: React.ReactNode | string;
  className?: string;
  type?: string;
}

function Button({ children, className }: ButtonTypes) {
  return (
    <button className={`${className} ${styles.buttonDefault}`}>
      {children}
    </button>
  );
}

export default Button;

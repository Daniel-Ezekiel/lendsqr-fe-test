import React from "react";
import styles from "@/app/_sass/button.module.scss";

interface ButtonTypes {
  children: React.ReactNode | string;
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
}

function Button({
  children,
  className,
  onClick,
  type,
  title,
  disabled,
}: ButtonTypes) {
  console.log(className);
  return (
    <button
      className={`${className} ${styles.buttonDefault}`}
      onClick={onClick}
      type={type}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

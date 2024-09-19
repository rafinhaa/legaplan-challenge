import React, { ButtonHTMLAttributes } from 'react';
import styles from "./styles.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({children, variant, ...rest}:ButtonProps) => {
  
  const variantMapping = {
    primary: styles.addTask,
    secondary: styles.deleteTask,
    tertiary: styles.cancelTask
  }[variant || "primary"];
  
  return (
    <button className={variantMapping} {...rest} >
      {children}
    </button>
  );
}
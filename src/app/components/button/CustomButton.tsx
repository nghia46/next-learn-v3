import React from "react";
import style from "./Button.module.css";
type ButtonProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "warning";
};

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  text = "click me!",
  variant = "primary",
}) => {
  return (
    <button className={`${style.button} ${style[`button--${variant}`]}`} onClick={onClick}>
      <p className={style.button__text}>{text}</p>
    </button>
  );
};

export default CustomButton;

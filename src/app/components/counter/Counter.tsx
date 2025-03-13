"use client";
import React from "react";
import CustomButton from "../button/CustomButton";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className={styles.counter}>
      <h1>Counter: {count}</h1>
      <div className={styles.buttonGroup}>
        <CustomButton text="Increase" variant="primary" onClick={increase} />
        <CustomButton text="Decrease" variant="secondary" onClick={decrease} />
      </div>
    </div>
  );
}

import React from "react";
import Card from "../card/card";
import styles from "./cardList.module.css";

export default function cardList() {
  return (
    <div className={styles.container}>
      <Card
        title="Iphone 13 ProMax"
        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
      />
      <Card title="Samsung S22 Ultra" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

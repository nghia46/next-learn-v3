import React from "react";
import styles from "./Card.module.css";
import CustomButton from "../button/CustomButton";

type CardProps = {
  title?: string;
  desc?: string;
  image?: string;
};
const card: React.FC<CardProps> = ({
  title = "Title",
  desc = "this is description",
  image = "https://placehold.co/600x400",
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.buttonContainer}>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};
export default card;

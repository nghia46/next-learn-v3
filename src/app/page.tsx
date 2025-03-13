import Counter from "./components/counter/Counter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Counter />
    </div>
  );
}

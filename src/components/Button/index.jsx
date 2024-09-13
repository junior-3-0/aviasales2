import styles from "./button.module.scss";

export function Button() {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label="Show 5 more tickets"
    >
      Показать еще 5 билетов!
    </button>
  );
}

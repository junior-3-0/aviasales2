import { useDispatch } from "react-redux";
import styles from "./button.module.scss";
import { countAction } from "../../store/count.slice";

export function Button() {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.button}
      type="button"
      aria-label="Show 5 more tickets"
      onClick={() => dispatch(countAction.increment())}
    >
      Показать еще 5 билетов!
    </button>
  );
}

import { useDispatch, useSelector } from "react-redux";
import styles from "./sortPanel.module.scss";
import cn from "classnames";
import { sortAction } from "../../store/sort.slice";

export function SortPanel() {
  const dispatch = useDispatch();
  const { tabs } = useSelector((state) => state.sort);

  return (
    <div className={styles.sort}>
      <button
        className={cn(styles.tab, styles["tab-left"], {
          [styles.active]: tabs,
        })}
        type="button"
        onClick={() => dispatch(sortAction.change(true))}
      >
        Самый дешевый
      </button>
      <button
        className={cn(styles.tab, styles["tab-right"], {
          [styles.active]: !tabs,
        })}
        type="button"
        onClick={() => dispatch(sortAction.change(false))}
      >
        Самый быстрый
      </button>
    </div>
  );
}

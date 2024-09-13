import { filterActions } from "../../store/filter.slice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./checkbox.module.scss";

export function Checkbox({ description, name }) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.filter[name]);

  return (
    <label className={styles.label} htmlFor={name}>
      <input
        className={styles.real}
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => dispatch(filterActions.consol(name))}
      />
      <span className={styles.custom}></span>
      {description}
    </label>
  );
}

import { Checkbox } from "../Checkbox";
import styles from "./filterCard.module.scss";

export function FilterCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Количество пересадок</h2>
      <Checkbox description={"Все"} name={"all"} />
      <Checkbox description={"Без пересадок"} name={"notransfer"} />
      <Checkbox description={"1 пересадка"} name={"onetransfer"} />
      <Checkbox description={"2 пересадка"} name={"twotransfer"} />
      <Checkbox description={"3 пересадка"} name={"threetransfer"} />
    </div>
  );
}

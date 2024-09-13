import { Button } from "../Button";
import { FilterCard } from "../FilterCard";
import { Logo } from "../Logo";
import { SortPanel } from "../SortPanel";
import { TicketList } from "../TicketList";
import styles from "./app.module.scss";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.wrapper}>
        <FilterCard />
        <div className={styles.inner}>
          <SortPanel />
          <TicketList />
          <Button />
        </div>
      </div>
    </div>
  );
}

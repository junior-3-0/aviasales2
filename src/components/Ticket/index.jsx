import { Segment } from "../Segment";
import styles from "./ticket.module.scss";

export function Ticket({ price, carrier, segments }) {
  return (
    <article className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{price}</div>
        <img
          className={styles.aviacompany}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="airlines"
        />
      </div>
      <div className={styles.body}>
        {segments.map((segment) => (
          <Segment key={segment.duration} {...segment} />
        ))}
      </div>
    </article>
  );
}

import { useSelector } from "react-redux";
import { Ticket } from "../Ticket";
import styles from "./ticketList.module.scss";
import { useGetTicketsQuery } from "../../store/ticket.slice";
import { compare } from "./compare";

export function TicketList() {
  const { notransfer, onetransfer, twotransfer, threetransfer } = useSelector(
    (state) => state.filter
  );
  const no = notransfer ? 0 : false;
  const one = onetransfer ? 1 : false;
  const two = twotransfer ? 2 : false;
  const three = threetransfer ? 3 : false;

  const { list } = useGetTicketsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      list: data?.tickets
        .filter((item) => {
          return compare(item, no, one, two, three);
        })
        .slice(0, 5),
    }),
  });
  console.log("data: ", list);

  const { tabs } = useSelector((state) => state.sort);

  /* list.sort((a, b) => a.price - b.price);
  if (!tabs) {
    list.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
    );
  } */

  return (
    <div className={styles.list}>
      {/* list.ticket.map((ticket) => (
        <Ticket key={ticket.price} {...ticket} />
      )) */}
    </div>
  );
}

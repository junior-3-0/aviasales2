import { useDispatch, useSelector } from "react-redux";
import { Ticket } from "../Ticket";
import styles from "./ticketList.module.scss";
import { compare } from "./compare";
import { useEffect } from "react";
import { fetchList } from "../../store/list.slice";
import SpinerLoader from "../SpinerLoader";
import { countAction } from "../../store/count.slice";

export function TicketList() {
  const { notransfer, onetransfer, twotransfer, threetransfer } = useSelector(
    (state) => state.filter
  );
  const { tabs } = useSelector((state) => state.sort);
  const { count } = useSelector((state) => state.count);
  const { list, loginErrorMessage, loading } = useSelector(
    (state) => state.list
  );
  const dispatch = useDispatch();
  let limit = false;

  const no = notransfer ? 0 : false;
  const one = onetransfer ? 1 : false;
  const two = twotransfer ? 2 : false;
  const three = threetransfer ? 3 : false;

  let resultlist = compare(list, no, one, two, three);

  if (resultlist.length <= count) {
    limit = true;
  }

  if (!limit) {
    resultlist = resultlist.slice(0, count);
  }

  resultlist.sort((a, b) => a.price - b.price);
  if (!tabs) {
    resultlist.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
    );
  }

  useEffect(() => {
    dispatch(fetchList());
    dispatch(countAction.reset());
  }, []);

  return (
    <div className={styles.list}>
      {loading && <SpinerLoader />}
      {loginErrorMessage && !resultlist.length && (
        <div className={styles.error}>
          Произошла ошибка:
          <br />
          {loginErrorMessage}
        </div>
      )}
      {!resultlist.length && !loginErrorMessage && !loading && (
        <div className={styles.error}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      )}
      {resultlist.map((ticket) => (
        <Ticket key={(ticket.price * Math.random()).toFixed(3)} {...ticket} />
      ))}
      {limit && !loginErrorMessage && !resultlist && !loading && (
        <div className={styles.info}>
          There are no more tickets available, try other filters.
        </div>
      )}
    </div>
  );
}

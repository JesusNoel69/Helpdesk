import styles from "./Column.module.css";
import Ticket from "../../../board/components/ticket/Ticket.jsx";
import { Children } from "react";
export default function Column(Props) {
  const { children } = Props;
  const items = Children.toArray(children);
  const title = items[0];
  const moreButton = items[1];
  const addButton = items[2];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sticky}>{title}</div>
        <div className={styles.scrollArea}>
          {addButton}
          <Ticket></Ticket>
          <Ticket></Ticket>
          <Ticket></Ticket>
          <Ticket></Ticket>
          <Ticket></Ticket>
          {/* handling logic fo button here */}
          {moreButton && moreButton}
        </div>
      </div>
    </>
  );
}

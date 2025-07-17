import styles from "./body.module.css";
function Body(Props) {
  const { time, children } = Props;
  const ticketNumber = children[0];
  const responsibleTicket = children[1];
  return (
    <>
      {ticketNumber}

      <div className={styles.container}>
        <header className={styles.header}>Ticket title</header>
        <section className={styles.section}>{time}</section>
      </div>
      {responsibleTicket}
    </>
  );
}
export default Body;

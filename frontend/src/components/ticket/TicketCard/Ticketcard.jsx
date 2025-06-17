import TicketFooter from "../ticket-footer/TicketFooter";
import TicketNumber from "../ticket-number/TicketNumber";
import styles from "../TicketCard/TicketCard.module.css";
import TimeDisplay from "../time-display/TimeDisplay";
function Ticketcard() {
  return (
    <>
      {/* each ticket */}
      <header className={styles.header}>
        <p className={styles.textCenter}>Ticket Name</p>
        <div className={styles.ticketNumber}>
          <TicketNumber number={1}></TicketNumber>
        </div>
      </header>
      {/* ticket body */}
      <section className={styles.body}>
        <TimeDisplay></TimeDisplay>
        <div>Some Ticket Information</div>
      </section>
      {/*  */}
      <footer>
        {/* <div>tags?</div> */}
        <div className={styles.ticketUser}>
          <TicketFooter></TicketFooter>
        </div>
      </footer>
    </>
  );
}
export default Ticketcard;

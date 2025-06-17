import styles from "../ticket-number/TicketNumber.module.css";
function TicketNumber(Props) {
  const { number } = Props;
  return (
    <>
      <p className={styles.container}>#{number}</p>
    </>
  );
}
export default TicketNumber;

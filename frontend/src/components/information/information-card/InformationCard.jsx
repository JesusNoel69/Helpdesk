import styles from "../information-card/InformationCard.module.css";
function InformationCard(Props) {
  const { children } = Props;
  return (
    <>
      <div className={styles.informationCard}>
        <p className={styles.element}>Responsible: ...</p>
        <p className={styles.element}>
          Start: <input type="date"></input>
        </p>
        <p className={styles.element}>
          Promise End: <input type="date"></input>
        </p>
        <div className={styles.element}>
          Time open: <p>00:00:05:15</p>
        </div>
        <div className={styles.row}>
          <p>State: </p>
          <div className={`${styles.element} ${styles.state} `}> </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default InformationCard;

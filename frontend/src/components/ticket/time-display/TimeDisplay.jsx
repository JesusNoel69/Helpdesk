import styles from "../time-display/TimeDisplay.module.css";
function TimeDisplay({ label = "HH:MM:SS", time = "00:05:15" }) {
  return (
    <div className={styles.container}>
      <div className={styles.timeText}>{label}</div>
      <div className={styles.timeText}>{time}</div>
    </div>
  );
}

export default TimeDisplay;

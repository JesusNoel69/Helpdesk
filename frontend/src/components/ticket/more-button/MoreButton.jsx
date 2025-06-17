import styles from "./MoreButton.module.css";
function MoreButton(Props) {
  const { haveMore } = Props;
  return (
    <>
      <button type="button" className={styles.button}>
        Show More +
      </button>
    </>
  );
}
export default MoreButton;

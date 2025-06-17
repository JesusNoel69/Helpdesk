import styles from "../title/Title.module.css";
function Title(Props) {
  const { counter, stylesTitle } = Props;
  styles.new = stylesTitle;
  return (
    <>
      <h5 className={styles.title} style={stylesTitle}>
        Title <span>({counter})</span>
      </h5>
    </>
  );
}
export default Title;

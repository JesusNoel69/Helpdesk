import styles from "./NavBar.module.css";
import logo from "./../../assets/image.png";
function NavBar(Props) {
  const { children } = Props;
  return (
    <>
      <div className={styles.padded}>
        <img src={logo} className={styles.logo} alt="..."></img>
        <div className={styles.container}>{children}</div>
      </div>
      <div className={styles.division}></div>
    </>
  );
}
export default NavBar;

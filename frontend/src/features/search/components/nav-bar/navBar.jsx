import styles from "./nav-bar.module.css";
import userImage from "/src/assets/user.svg";
export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <Logo></Logo>
        <div className={styles.bar}>
          <LoginButton></LoginButton>
        </div>
      </div>
    </>
  );
}

export function Logo() {
  return (
    <>
      <img
        className={styles.image}
        src="src/assets/svg-logo.png"
        alt="logo"
      ></img>
    </>
  );
}
function LoginButton() {
  return (
    <>
      <button className={styles.login}>
        <img className={styles.svg} src={userImage} alt="user" />
        <span className={styles.text}>Login</span>
      </button>
    </>
  );
}

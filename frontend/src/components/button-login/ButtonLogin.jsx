import styles from "./ButtonLogin.module.css";
import userImage from "../../assets/user.svg";
function ButtonLogin() {
  return (
    <>
      <button
        onClick={() => console.log("click on login button")}
        className={styles.button}
      >
        <img className={styles.svg} src={userImage} alt="user" />
        <span className={styles.text}>Login</span>
      </button>
    </>
  );
}

export default ButtonLogin;

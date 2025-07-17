import styles from "./Responsible.module.css";
import defaultImage from "../../../../assets/user.svg";
export default function Responsible(Props) {
  const { id = null, className } = Props;
  const classToApply = [styles.design, className].join(" ");
  return (
    <>
      <img
        className={classToApply}
        src={id ? defaultImage : defaultImage}
        alt="..."
      />
      {id}
    </>
  );
}

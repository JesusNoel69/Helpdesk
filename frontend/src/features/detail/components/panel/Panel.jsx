import CommentList from "../comment-list/commentList";
import styles from "./Panel.module.css";
export default function Panel() {
  return (
    <>
      <div className={styles.panel}>
        <Field label="Responsible" value="Jhon Doe"></Field>
        <Field label="Start" value="12345"></Field>
        <Field label="Promise End" value="436534"></Field>
        <Field label="Time" value="21232"></Field>
        <State background="blue"></State>
        <CommentList></CommentList>
      </div>
    </>
  );
}

function Field(Props) {
  const { label = "", value = "" } = Props;
  // const t = parseInt(value);
  const text = `${label} : ${value}`; //managing typeof
  const classToApply = [styles.display, styles.field].join(" ");
  return (
    <>
      <div className={classToApply}>
        <p className={styles.center}>{text}</p>
        {/* {t} */}
      </div>
    </>
  );
}

function State(Props) {
  const { background = "#242424" } = Props;
  return (
    <>
      <div className={styles.display}>
        <p>State: </p>
        <div style={{ background }} className={styles.state}></div>
      </div>
    </>
  );
}

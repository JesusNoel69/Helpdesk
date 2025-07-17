import styles from "./Ticket.module.css";
import Body from "../body/body.jsx";
import Number from "../number/Number.jsx";
import Responsible from "../responsible/Responsible.jsx";
function Ticket() {
  return (
    <>
      <div className={styles.container}>
        <Body time="20909">
          <Number
            number="1"
            color="#5454ff"
            className={styles.positionNumber}
          ></Number>
          <Responsible className={styles.positionUser}></Responsible>
        </Body>
      </div>
    </>
  );
}

export default Ticket;

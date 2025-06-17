import userImage from "../../../assets/image.png";
import styles from "../ticket-footer/TicketFooter.module.css";
function TicketFooter() {
  return (
    <>
      <img
        src={userImage}
        className={styles.image}
        alt="user image"
        id="user"
      ></img>
      {/* <div>tags?</div> */}
    </>
  );
}
export default TicketFooter;

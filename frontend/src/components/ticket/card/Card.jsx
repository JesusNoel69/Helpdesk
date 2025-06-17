import Title from "../title/Title";
import styles from "../card/Card.module.css";
import Ticketcard from "../TicketCard/Ticketcard";
import MoreButton from "../more-button/MoreButton";
function Card(Props) {
  const { isAddButton } = Props;
  return (
    <>
      <div className={styles.card}>
        {/* ticket column name */}
        <Title counter={1}></Title>
        {/* button add ticket */}
        {isAddButton && (
          <div className={styles.add}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              width="40"
              height="40"
              style={{ background: "white" }}
            >
              <path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h5V5h2v5h5v2h-5v5h-2v-5H5z" />
            </svg>
          </div>
        )}

        {/* each ticket in column*/}
        <div className={styles.ticket}>
          <Ticketcard></Ticketcard>
        </div>
        {/*  */}
        <MoreButton></MoreButton>
      </div>
    </>
  );
}
export default Card;

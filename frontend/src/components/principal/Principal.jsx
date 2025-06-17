import SearchInput from "../finder/search-input/SearchInput";
import Comment from "../information/comment/Comment";
import InformationCard from "../information/information-card/InformationCard";
import Card from "../ticket/card/Card";
import styles from "../principal/Principal.module.css";
function Principal() {
  const tickets = Array.from({ length: 4 }, (_, index) => {
    return <Card key={index} isAddButton={index == 0 ? true : false}></Card>;
  });

  return (
    <>
      <div className={styles.maxHeight}>
        <SearchInput></SearchInput>
        <div className={styles.layout}>
          <div className={`${styles.tickets} ${styles.leftPanel}`}>
            {/* <Card isAddButton={true}></Card> */}
            {tickets}
          </div>
          <div className={styles.rightPanel}>
            <InformationCard>
              <Comment></Comment>
            </InformationCard>
          </div>
        </div>
      </div>
    </>
  );
}
export default Principal;

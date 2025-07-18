import styles from "./Card.module.css";
import Column from "../column/Column.jsx";
import Panel from "../../../detail/components/panel/Panel.jsx";

export default function Card({ style }) {
  return (
    <>
      <div style={style} className={styles.container}>
        <Column>
          <Title className title="Open" count="2" color="red"></Title>
          <ShowMore></ShowMore>
          <AddButton></AddButton>
        </Column>
        <Column>
          <Title title="In Progress" count="2" color="#4682B4"></Title>
          <ShowMore></ShowMore>
        </Column>
        <Column>
          <Title
            className
            title="Blocked"
            count="2"
            color="yellowgreen"
          ></Title>
          <ShowMore></ShowMore>
        </Column>
        <Column>
          <Title className title="Closed" count="2" color="green"></Title>
          <ShowMore></ShowMore>
        </Column>
        <Panel></Panel>
      </div>
    </>
  );
}

function Title(Props) {
  const { title = "No Title", color = "#242424", count = "0" } = Props;
  const background = { background: color };
  return (
    <>
      <div
        style={background}
        className={[styles.title, styles.positionTitle].join(" ")}
      >
        {`${title}(${count})`}
      </div>
    </>
  );
}

function ShowMore() {
  return (
    <>
      <button className={styles.showButton}>Show More +</button>
    </>
  );
}

function AddButton() {
  return (
    <>
      <button className={styles.addButton}>Add +</button>
    </>
  );
}

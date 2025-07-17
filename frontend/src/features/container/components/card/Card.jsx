import styles from "./Card.module.css";
import Column from "../column/Column.jsx";
import Panel from "../../../detail/components/panel/Panel.jsx";

export default function Card({ style }) {
  return (
    <>
      <div style={style} className={styles.container}>
        <Column>
          <Title className title="To Do" count="2" color="red"></Title>
          <ShowMore></ShowMore>
          <AddButton></AddButton>
        </Column>
        <Column>
          <Title title="Blocked" count="2" color="red"></Title>
          <ShowMore></ShowMore>
        </Column>
        <Column>
          <Title className title="In process" count="2" color="red"></Title>
          <ShowMore></ShowMore>
        </Column>
        <Column>
          <Title className title="Terminated" count="2" color="red"></Title>
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

import styles from "./commentList.module.css";
export default function CommentList() {
  return (
    <>
      <p>Contents:</p>
      <div className={styles.comment}>
        {/* scrollable */}
        <ul className={styles.scroller}>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <Divider></Divider>
          <li>
            Dolore perspiciatis necessitatibus vero reprehenderit incidunt
            veniam beatae accusamus architecto quae, at eius autem, quam itaque
            laudantium illo voluptates nesciunt nihil quas!
          </li>
        </ul>
      </div>
    </>
  );
}

export function Divider() {
  return (
    <>
      <div className={styles.divider}></div>
    </>
  );
}

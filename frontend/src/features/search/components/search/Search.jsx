import styles from "./Search.module.css";
export default function Search() {
  return (
    <>
      <section>
        <Fiter></Fiter>
        <input className={styles.input} type="text" />
        <SearchButton></SearchButton>
      </section>
    </>
  );
}

export function Fiter() {
  return (
    <>
      <button type="submit" className={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M27.49 2h-22A1.54 1.54 0 0 0 4 3.53v2a1.53 1.53 0 0 0 .31.93l7.83 10.36a4.32 4.32 0 0 1 .86 2.59v4.92a3.57 3.57 0 0 0 1.36 2.8l3.22 2.5a1.52 1.52 0 0 0 .93.32 1.44 1.44 0 0 0 .67-.16 1.5 1.5 0 0 0 .82-1.37v-9a4.32 4.32 0 0 1 .86-2.6l7.83-10.35a1.53 1.53 0 0 0 .31-.93v-2A1.52 1.52 0 0 0 27.49 2zM27 5.39l-7.73 10.22A6.37 6.37 0 0 0 18 19.43v8l-2.45-1.89a1.57 1.57 0 0 1-.55-1.21v-4.92a6.29 6.29 0 0 0-1.27-3.79L6 5.39V4h21z"
            style={{ fill: "black" }}
          />
        </svg>
      </button>
    </>
  );
}

export function SearchButton() {
  const classToApply = [styles.button, styles.buttonSearch].join(" ");
  return (
    <>
      <button type="submit" className={classToApply}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className={styles.svg}
        >
          <g data-name="Home Search">
            <path d="m29.025 24.318-6.171-6.172a.5.5 0 0 0-.708 0l-.646.647-2.072-2.072a9.519 9.519 0 1 0-2.707 2.707l2.072 2.072-.647.646a.5.5 0 0 0 0 .708l6.172 6.171a3.328 3.328 0 1 0 4.707-4.707zM3 11.5a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 3 11.5zm14.537 7.33a9.03 9.03 0 0 0 1.293-1.293l1.963 1.963-1.293 1.293zm10.781 9.488a2.384 2.384 0 0 1-3.293 0L19.207 22.5c1.428-1.428-1.641 1.642 2.647-2.646l.646-.647 5.818 5.818a2.331 2.331 0 0 1 0 3.293z" />
            <path d="M15.5 11a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-.5.5H13v-2.5a1.5 1.5 0 0 0-3 0V16H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-1 0v4A1.5 1.5 0 0 0 8.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-4a.5.5 0 0 0-.5-.5zM11 16v-2.5a.5.5 0 0 1 1 0V16z" />
            <path d="M16.891 10.813a.5.5 0 0 0-.079-.7l-5-4a.5.5 0 0 0-.625 0l-5 4a.5.5 0 0 0 .625.782L11.5 7.14l4.687 3.751a.5.5 0 0 0 .7-.078z" />
          </g>
        </svg>
      </button>
    </>
  );
}

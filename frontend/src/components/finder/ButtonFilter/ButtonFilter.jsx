import styles from "../ButtonFilter/ButtonFilter.module.css";
function ButtonFilter() {
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

export default ButtonFilter;

import styles from "./SearchInput.module.css";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import ButtonFind from "../find/ButtonFind";
function SearchInput() {
  return (
    <>
      <div className={styles.container}>
        <ButtonFilter></ButtonFilter>
        <input type="text" placeholder="Buscar" className={styles.input} />
        {/* <button type="submit">Find</button> */}
        <div className={styles.find}>
          <ButtonFind></ButtonFind>
        </div>
      </div>
    </>
  );
}
export default SearchInput;

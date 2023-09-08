import styles from "./Dropdown.module.css";

const Dropdown = ({ changeHandler }) => {
  return (
    <>
      <label htmlFor="quality" className={styles.label}>
        How was the service quality ?
      </label>
      <select
        name="servicequality"
        id="quality"
        onChange={changeHandler}
        className={styles.select}
      >
        <option value="20">Excellent - 20%</option>
        <option value="10">Moderate - 10%</option>
        <option value="5">Bad - 5%</option>
      </select>
    </>
  );
};
export default Dropdown;

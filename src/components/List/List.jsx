import styles from "./List.module.css";

const List = ({ listElements, tipAmt }) => {
  const listItem = listElements.map((custName, index) => (
    <li key={index} className={styles.listelement}>
      {custName} paid the tip of Rs. {tipAmt[index]}
    </li>
  ));

  return (
    <>
      <ul>{listItem}</ul>
    </>
  );
};
export default List;

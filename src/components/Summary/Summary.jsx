import styles from "./Summary.module.css";

const Summary = ({ totalCust, totalTip }) => {
  return (
    <>
      <table className={styles.table}>
        <tr>
          <th className={styles.tableRow}>Total Customers</th>
          <th className={styles.tableRow}>Total Tip Recieved</th>
        </tr>
        <tr>
          <td className={styles.tableRow}>{totalCust}</td>
          <td className={styles.tableRow}>{totalTip}</td>
        </tr>
      </table>
    </>
  );
};
export default Summary;

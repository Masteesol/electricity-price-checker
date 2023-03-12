import styles from "../styles/sass/Pricestable.module.scss";

export default ({ prices }) => {
  const { cheapest_hour, peak_hour, highest, lowest } = prices;
  return (
    <table className={styles.container}>
      <tbody>
        <tr className={styles.textwarning}>
          <th>Peak hour</th>
          <th>NOK</th>
        </tr>
        <tr className={styles.textwarning}>
          <td>{peak_hour}</td>
          <td>{highest}/kWh</td>
        </tr>
        <tr className={styles.textgood}>
          <th>Cheapest hour</th>
          <th>NOK</th>
        </tr>
        <tr className={styles.textgood}>
          <td>{cheapest_hour}</td>
          <td>{lowest}/kWh</td>
        </tr>
      </tbody>
    </table>
  );
};

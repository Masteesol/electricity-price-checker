import styles from "../styles/sass/PricesInfographic.module.scss";

export default ({ prices, specificPrices }) => {
  const { highest, lowest } = specificPrices;
  const currentHour = new Date().getHours();
  return (
    <dl className={styles.dl}>
      <dt>Chart</dt>
      {prices.map((price, index) => (
        <dd key={index}>
          <div className={styles.timecontainer}>
            <span
              className={
                parseInt(price[1].substring(11, 13)) === currentHour
                  ? styles.fontactive
                  : ""
              }
            >
              {price[1].substring(11, 16)}
            </span>
          </div>
          <div
            className={`${styles.graph} ${
              parseInt(price[1].substring(11, 13)) === currentHour
                ? styles.bgactive
                : ""
            }`}
            style={{
              width: `${(price[0] / highest) * 100}%`,
              backgroundColor: checkPrice(price[0]),
            }}
          >
            <p>{price[0] + "/kWh"}</p>
          </div>
        </dd>
      ))}
    </dl>
  );
};

const checkPrice = (price) => {
  let priceUp = price * 100;
  if (priceUp <= 100) {
    return `rgb(${(priceUp / 100) * 127}, 210, 0)`;
  } else if (priceUp > 100 && priceUp < 200) {
    return `rgb(${(priceUp / 200) * 255}, 210, 0)`;
  } else if (priceUp > 200 && priceUp < 300) {
    priceUp = (priceUp / 200 - 1).toFixed(4) * 255;
    priceUp = 255 - priceUp;
    return `rgb(255, ${priceUp}, 0)`;
  } else if (priceUp > 300 && priceUp < 400) {
    priceUp = (priceUp / 300 - 1).toFixed(4) * 127;
    priceUp = 127 - priceUp;
    return `rgb(255, ${priceUp}, 0)`;
  } else if (priceUp > 400 && priceUp < 500) {
    priceUp = (1 - (priceUp - 400) / 100) * 127;
    return `rgb(255, ${priceUp}, 0)`;
  }
};

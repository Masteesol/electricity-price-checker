import Head from "next/head";
import Header from "../../../components/Header";
import PricesInfographic from "../../../components/PricesInfographic";
import PricesTable from "../../../components/PricesTable";
import styles from "../../../styles/sass/Layout.module.scss";
import areaData from "../../../data/areas";

export default function Area({ prices, currentId }) {
  const location = areaData.filter((item) => item.area_code === currentId);
  const filtered_prices = prices.map((price) => {
    return [price.NOK_per_kWh.toFixed(2), price.time_start];
  });
  const { cheapest_hour, peak_hour, highest, lowest } =
    specificPriceData(filtered_prices);
  return (
    <>
      <Head>
        <title>Electricity prices for {location[0].area_name}</title>
      </Head>
      <Header title={location[0].area_name} />
      <main className={styles.main}>
        <h3>{"Prices in NOK"}</h3>
        <PricesTable prices={{ cheapest_hour, peak_hour, highest, lowest }} />
        <PricesInfographic
          prices={filtered_prices}
          specificPrices={{ highest, lowest }}
        />
      </main>
    </>
  );
}

const apiDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let day = date.getDay() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  return { year: year, day: day, month: month };
};

export const getServerSideProps = async (context) => {
  try {
    const { year, day, month } = apiDate();
    const res_prices = await fetch(
      `https://www.hvakosterstrommen.no/api/v1/prices/${year}/${month}-${day}_${context.params.id}.json`
    );
    const prices = await res_prices.json();
    const currentId = context.params.id;
    return {
      props: {
        prices,
        currentId,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

const specificPriceData = (prices) => {
  const sorted = prices
    .map((item) => item[0])
    .sort()
    .reverse();
  const highest = sorted[0];
  const lowest = sorted.slice(-1)[0];
  const peak_hour = prices
    .filter((price) => price[0] === highest)[0][1]
    .substring(11, 16);
  const cheapest_hour = prices
    .filter((price) => price[0] === lowest)[0][1]
    .substring(11, 16);
  return {
    highest: highest,
    lowest: lowest,
    peak_hour: peak_hour,
    cheapest_hour: cheapest_hour,
  };
};

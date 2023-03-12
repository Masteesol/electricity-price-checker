import Head from "next/head";
import { getFormattedDate } from "../utils/getFormattedDate";
import { AreaList } from "../components/AreaList";
import Header from "../components/Header";
import styles from "../styles/sass/Layout.module.scss";
import areaData from "../data/areas.js";

export default function Home() {
  //console.log(areaData);
  return (
    <>
      <Head>
        <title>Checking the kwh price where I live</title>
      </Head>
      <Header title={"Electricity prices for " + getFormattedDate()} />
      <main className={styles.main}>
        <h3>{"Select region"}</h3>
        <AreaList areas={areaData} />
      </main>
    </>
  );
}

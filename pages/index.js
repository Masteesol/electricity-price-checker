import { server } from "../config/index";
import Head from "next/head";
import { getFormattedDate } from "../utils/getFormattedDate";
import { AreaList } from "../components/AreaList";
import Header from "../components/Header";
import styles from "../styles/sass/Layout.module.scss";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Checking the kwh price where I live</title>
      </Head>
      <Header title={"Electricity prices for " + getFormattedDate()} />
      <main className={styles.main}>
        <h3>{"Select region"}</h3>
        <AreaList areas={data} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/areas`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

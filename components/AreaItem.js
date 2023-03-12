import styles from "../styles/sass/AreaItem.module.scss";
import Link from "next/link";
export const AreaItem = ({ data }) => {
  return (
    <Link
      className={styles.container}
      href={`area/${data.area_code}/`}
      as={`/area/${data.area_code}`}
    >
      <div className={styles.card}>
        <h3>{data.area_name}</h3>
        <p>{data.area_code}</p>
      </div>
    </Link>
  );
};

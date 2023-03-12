import styles from "../styles/sass/Header.module.scss";

export default ({ title }) => {
  return <h1 className={styles.header}>{title}</h1>;
};

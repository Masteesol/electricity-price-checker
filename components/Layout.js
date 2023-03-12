import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from "../styles/sass/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.body}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

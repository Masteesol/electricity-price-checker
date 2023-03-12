import Head from "next/head";
import { useContext } from "react";
import Header from "../../components/Header";
import { unsetToken } from "../../lib/auth";
import Link from "next/link";
import Router from "next/router";
import AuthContext from "../../lib/authContext";
import styles from "../../styles/sass/Layout.module.scss";
import adminStyles from "../../styles/sass/Admin.module.scss";
import utilityStyles from "../../styles/sass/Utilities.module.scss";

export default function Profile() {
  const [auth, setAuth] = useContext(AuthContext);

  const handleLogout = () => {
    unsetToken();
    Router.reload("/");
  };
  console.log(auth);

  return (
    <>
      <Head>
        <title>Admin page</title>
      </Head>
      <Header title="Admin page" />
      <main className={`${styles.main}`}>
        <div className={adminStyles.container}>
          <h3>Admin</h3>

          <button
            type="submit"
            className={utilityStyles.button}
            onClick={handleLogout}
          >
            <Link href="/">Logout</Link>
          </button>
        </div>
      </main>
    </>
  );
}

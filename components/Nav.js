import Link from "next/link";
import styles from "../styles/sass/Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <Link href={"/"}>
          <li className={styles.li}>Home</li>
        </Link>
        <Link href={"/contact"}>
          <li className={styles.li}>Contact</li>
        </Link>
        <Link href={"/login"}>
          <li className={styles.li}>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

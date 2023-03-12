import Head from "next/head";
import { useContext } from "react";
import Header from "../../components/Header";
import { setToken } from "../../lib/auth";
import AuthContext from "../../lib/AuthContext";
import { useRouter } from "next/router";
import styles from "../../styles/sass/Layout.module.scss";
import utilityStyles from "../../styles/sass/Utilities.module.scss";
import { modifyClassNames } from "../../utils/manage-elements";

export default function Profile() {
  const [auth, setAuth] = useContext(AuthContext);
  console.log(auth);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //"test@tesuser.com"
    //"Testing123#"
    try {
      const validation = (form) => {
        const passedValidation = [];

        if (form.name.value.trim() !== "" && form.name.value.length > 5) {
          modifyClassNames(form.name, "borderpassed", "borderwarning");
          passedValidation.push("passed");
        } else {
          modifyClassNames(form.name, "borderwarning", "borderpassed");
        }
        if (form.password.value.trim() !== "") {
          modifyClassNames(form.password, "borderpassed", "borderwarning");
          passedValidation.push("passed");
        } else {
          modifyClassNames(form.password, "borderwarning", "borderpassed");
        }
        if (passedValidation.length === 2) {
          return true;
        } else {
          return false;
        }
      };
      if (validation(e.target)) {
        const data = {
          identifier: e.target.name.value,
          password: e.target.password.value,
        };
        const res = await fetch(
          `https://marius-backend-general.herokuapp.com/api/auth/local/`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.status);
        if (res.status !== 200) {
          modifyClassNames(e.target.name, "borderwarning", "borderpassed");
          modifyClassNames(e.target.password, "borderwarning", "borderpassed");
          e.target.name.value = "";
          e.target.password.value = "";
          alert("Wrong password or username");
        } else {
          const userData = await res.json();
          console.log(userData);
          setAuth(userData);
          setToken(userData);
          router.push("/admin");
        }
      } else {
        alert("Empty input field");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>Login page</title>
      </Head>
      <Header title="Login" />
      <main className={`${styles.main}`}>
        <h3>{"Login form"}</h3>
        <form onSubmit={handleSubmit} className={utilityStyles.form}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name"></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
          <button type="submit" className={utilityStyles.button}>
            Login
          </button>
        </form>
      </main>
    </>
  );
}

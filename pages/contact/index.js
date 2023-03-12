import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/sass/Layout.module.scss";
import utilityStyles from "../../styles/sass/Utilities.module.scss";
import { modifyClassNames } from "../../utils/manage-elements";

export default function contact() {
  const validation = (form) => {
    const passedValidation = [];
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.value)) {
      modifyClassNames(form.email, "borderpassed", "borderwarning");
      passedValidation.push("passed");
    } else {
      modifyClassNames(form.email, "borderwarning", "borderpassed");
    }
    if (form.name.value.trim() !== "" && form.name.value.length > 5) {
      modifyClassNames(form.name, "borderpassed", "borderwarning");
      passedValidation.push("passed");
    } else {
      modifyClassNames(form.name, "borderwarning", "borderpassed");
    }
    if (form.subject.value.trim() !== "") {
      modifyClassNames(form.subject, "borderpassed", "borderwarning");
      passedValidation.push("passed");
    } else {
      modifyClassNames(form.subject, "borderwarning", "borderpassed");
    }
    if (form.message.value.trim() !== "") {
      modifyClassNames(form.message, "borderpassed", "borderwarning");
      passedValidation.push("passed");
    } else {
      modifyClassNames(form.message, "borderwarning", "borderpassed");
    }
    if (passedValidation.length === 4) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validation(e.target);
    console.log(result);
  };
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <Header title="Contact Us" />
      <main className={`${styles.main}`}>
        <p>Responsetime is about 5 working days</p>
        <form onSubmit={handleSubmit} className={utilityStyles.form}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name"></input>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject"></input>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
          <label htmlFor="message">message</label>
          <textarea id="message"></textarea>
          <button type="submit" className={utilityStyles.button}>
            Send
          </button>
        </form>
      </main>
    </>
  );
}

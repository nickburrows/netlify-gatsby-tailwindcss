import React, { useState } from "react";
import Seo from "../components/Seo";
import * as styles from "../components/random.module.css";
import { ToastContainer, toast } from "react-toastify";

const RandomPasswordPage = () => {
  const [password, setPassword] = useState("**********************");
  const generatePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    setPassword(randomPassword);

    // copy the password to the clipboard & fire toast message
    if (navigator.clipboard.writeText(randomPassword)) {
      toast("Password copied to your clipboard");
    }
  };
  return (
    <div className={styles.background}>
      <h1 className={styles.heading}>Generate a random password</h1>
      <div className={styles.wrapper}>
        <div className={styles.password}>{password}</div>
        <button className={styles.generatePassword} onClick={generatePassword}>
          Generate password
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export const Head = () => <Seo title="Random Password" />;

export default RandomPasswordPage;

import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel Free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hrishishinde28@gmail.com">hrishishinde28@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hrishikeshshinde1122/">linkedin.com/hrishikeshshinde1122</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/hrishishinde28">github.com/hrishishinde28</a>
        </li>
    </ul>
  </footer>
  );
};

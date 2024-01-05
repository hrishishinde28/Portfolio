import React from 'react'
import styles from "./Education.module.css";
import { getImageUrl } from '../../utils';
import education from  "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container}>
    <h2 className={styles.title}>Education</h2>
    <div className={styles.content}>
    <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
                <>
              <li key={id} className={styles.educationItem}>
                <img
                  src={getImageUrl(educationItem.imageSrc)}
                  alt={`${educationItem.organisation} Logo`}
                />
                <div className={styles.educationItemDetails}>
                  <h3>{`${educationItem.organisation}`}</h3>
                  <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  <ul>
                    {educationItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <br></br>
              </>
            );
          })}
        </ul>
    </div>
    </section>
  );
};

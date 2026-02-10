import { IDescriptionProps } from "./Description.typings";

import styles from "./Description.module.css";
import Link from "next/link";

export const Description = ({
  period,
  company,
  companyLink,
  position,
  mainPoints,
}: IDescriptionProps) => {
  return (
    <div className={styles['Description']}>
      <div className={styles['Description-Position']}>
        {position} at <Link href={companyLink} className={styles['Description-Company']}>@{company}</Link>
      </div>
      <span className={styles['Description-Period']}>{period}</span>
      <ul className={styles['Description-Points']}>
        {mainPoints.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    </div>
  );
};
import { WorkCard } from "./WorksList.components/WorkCard";
import { WORKS_LIST } from "./WorksList.const";

import styles from "./WorksList.module.css";

export const WorksList = () => {
  return (
    <ul className={styles["WorksList"]}>
      {WORKS_LIST.map((work, index) => (
          <li key={index} className={styles["WorksList-Card"]}>
            <WorkCard {...work} />
          </li>
        )
      )}
    </ul>
  );
};
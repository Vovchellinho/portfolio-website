import { Section } from "@shared/ui/Section";
import { WorksList } from "@features/WorksList";

import styles from "./Works.module.css";

export const Works = () => {
  return (
    <Section className={styles['Works']}>
      <h2 className={styles['Works-Title']}>My latest works</h2>
      <WorksList />
    </Section>
  );
};
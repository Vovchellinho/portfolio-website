import { Section } from "@shared/ui/Section";
import { Tabs } from "@features/Tabs";

import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <Section className={styles['Experience']}>
      <h2 className={styles['Experience-Title']}>My experience</h2>
      <Tabs />
    </Section>
  );
};
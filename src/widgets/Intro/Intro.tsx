import { Section } from "@components/Section";
import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <Section className={styles['Intro']}>
      <h1  className={styles['Intro-Title']}>Hello, I’m<br/>Vladimir Otchertsov</h1>
      <h2 className={styles['Intro-Description']}>
        I am a UI Engineer at Google, where I design and develop user-centered interfaces for
        cutting-edge technology products. I work with a talented team to create visually appealing
        and intuitive designs that enhance user experience. I am passionate about using technology
        to create beautiful and functional designs that solve real-world problems.
      </h2>
    </Section>
  );
};
import { Section } from "@components/Section";
import { TagsList } from "@components/TagsList";
import { ITagProps } from "@components/Tag/Tag.typings";

import styles from "./Intro.module.css";

export const Intro = () => {
  const tags: ITagProps[] = [
    { text: 'HTML', icon: 'html' },
    { text: 'CSS', icon: 'css' },
    { text: 'JavaScript', icon: 'js' },
    { text: 'TypeScript', icon: 'ts' },
    { text: 'React', icon: 'react' },
    { text: 'Nextjs', icon: 'next' },
    { text: 'Nodejs', icon: 'node' },
    { text: 'Express', icon: 'express' },
  ];

  return (
    <Section className={styles['Intro']}>
      <h1 className={styles['Intro-Title']}>Hello, I’m<br/>Vladimir Otchertsov</h1>
      <div className={styles['Intro-Description']}>
        <h2  className={styles['Intro-DescriptionText']}>
          I am a UI Engineer at Google, where I design and develop user-centered interfaces for
          cutting-edge technology products. I work with a talented team to create visually appealing
          and intuitive designs that enhance user experience. I am passionate about using technology
          to create beautiful and functional designs that solve real-world problems.
        </h2>
        <TagsList className={styles['Intro-DescriptionTags']} tags={tags} />
      </div>
    </Section>
  );
};
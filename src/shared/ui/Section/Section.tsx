import { ISectionProps } from './Section.typings';

import styles from './Section.module.css';

export const Section = ({ children, className }: ISectionProps) => {
  const classNames = [
    styles['Section'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={classNames}>
      {children}
    </section>
  );
};
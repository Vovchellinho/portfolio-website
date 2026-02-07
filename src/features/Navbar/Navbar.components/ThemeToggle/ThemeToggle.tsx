import { Icon } from '@components/Icon';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  return (
    <div className={styles['ThemeToggle']}>
      <Icon icon="light" />
    </div>
  );
};
"use client";
import { useTheme } from '@shared/provider/ThemeProvider';
import { Icon } from '@shared/ui/Icon';

import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles['ThemeToggle']} onClick={toggleTheme}>
      <Icon icon="light" />
    </div>
  );
};
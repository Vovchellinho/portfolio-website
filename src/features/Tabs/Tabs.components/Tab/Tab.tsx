import { ITabProps } from "./Tab.typings";
import { useCallback } from "react";
import { Icon } from "@shared/ui/Icon";

import styles from "./Tab.module.css";

export const Tab = ({
  id,
  icon,
  active,
  company,
  position,
  onClick
}: ITabProps) => {
  const classNames = [
    styles['Tab'],
    active ? styles['Tab__active'] : undefined,
  ].filter(Boolean).join(' ');

  const handleClick = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return (
    <div className={classNames} onClick={handleClick}>
      <Icon size={36} icon={icon} />
      <div className={styles['Tab-Information']}>
        <h3 className={styles['Tab-InformationCompany']}>{company}</h3>
        <h4 className={styles['Tab-InformationPosition']}>{position}</h4>
      </div>
    </div>
  );
};
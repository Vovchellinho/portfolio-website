import { ITagProps } from "./Tag.typings";

import styles from "./Tag.module.css";
import { Icon } from "@components/Icon";

export const Tag = ({ text, icon }: ITagProps) => {
  return (
    <div className={styles['Tag']}>
      {icon ? <Icon size={12} icon={icon} /> : null}
      <span>{text}</span>
    </div>
  );
};
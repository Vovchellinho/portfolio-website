import { ITagProps } from "./Tag.typings";
import { Icon } from "@shared/ui/Icon";

import styles from "./Tag.module.css";

export const Tag = ({ text, icon }: ITagProps) => {
  const classNames = [
    styles['Tag'],
    icon ? styles[`Tag__withIcon`] : undefined,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {icon ? <Icon size={12} icon={icon} /> : null}
      <span>{text}</span>
    </div>
  );
};
import { ITagProps } from "./Tag.typings";

import styles from "./Tag.module.css";
import { Icon } from "@components/Icon";

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
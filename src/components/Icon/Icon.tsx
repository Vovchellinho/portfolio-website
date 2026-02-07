import { IIconProps } from "./Icon.typings";
import { ICONS } from "./registry";

import styles from "./Icon.module.css";

export const Icon = ({ icon, size = 18, className, title, ...props }: IIconProps) => {
  const Svg = ICONS[icon];

  return (
    <Svg
      width={size}
      height={size}
      className={[styles.Icon, className].filter(Boolean).join(" ")}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    />
  );
};

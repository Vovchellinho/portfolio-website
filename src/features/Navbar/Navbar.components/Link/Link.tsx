import NextLink from "next/link";
import { ILinkProps } from './Link.typings';

import styles from "./Link.module.css";

export const Link = ({ href, children, ...props }: ILinkProps) => {
  return (
    <NextLink className={styles['Link']} href={href} {...props}>
      {children}
    </NextLink>
  );
};
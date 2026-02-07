import NextLink from "next/link";
import { IButtonProps } from "./Button.typings";

import styles from "./Button.module.css";

export const Button = (props: IButtonProps) => {
  const { view = "filled", children } = props;

  const className = [
    styles['Button'],
    styles[`Button__${view}`],
  ].join(' ');

  if (props.href != null) {
    const { href, ...rest } = props;

    return (
      <NextLink href={href} className={className} {...rest}>
        {children}
      </NextLink>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
};

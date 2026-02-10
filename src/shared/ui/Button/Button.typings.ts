import { ComponentPropsWithoutRef, ReactNode } from "react";
import type { LinkProps } from "next/link";

type View = "filled" | "outline";

type BaseProps = {
  view?: View;
  children: ReactNode;
};

type ButtonVariant =
  BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    href?: never;
  };

type LinkVariant =
  BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "children" | "href"> &
  Omit<LinkProps, "children"> & {
    href: LinkProps["href"];
    disabled?: never;
    type?: never;
  };

export type IButtonProps = ButtonVariant | LinkVariant;
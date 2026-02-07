import { LinkProps } from "next/link";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export type ILinkProps =
  Omit<LinkProps, "href" | "children"> &
  Omit<AnchorProps, "href" | "children"> & {
    href: LinkProps["href"];
    children: ReactNode;
  };
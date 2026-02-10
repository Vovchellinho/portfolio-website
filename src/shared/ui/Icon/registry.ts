import type { ComponentType, SVGProps } from "react";

import github from "./Icon.assets/github.svg";
import light from "./Icon.assets/light.svg";
import burger from "./Icon.assets/burger.svg";
import css from "./Icon.assets/css.svg";
import react from "./Icon.assets/react.svg";
import html from "./Icon.assets/html.svg";
import express from "./Icon.assets/express.svg";
import next from "./Icon.assets/next.svg";
import node from "./Icon.assets/node.svg";
import ts from "./Icon.assets/ts.svg";
import js from "./Icon.assets/js.svg";

export const ICONS = {
  github,
  light,
  burger,
  css,
  react,
  html,
  express,
  next,
  node,
  ts,
  js,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

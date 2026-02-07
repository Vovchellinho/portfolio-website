import type { ComponentType, SVGProps } from "react";

import Github from "./Icon.assets/github.svg";
import Light from "./Icon.assets/light.svg";
import Burger from "./Icon.assets/burger.svg";
import Css from "./Icon.assets/css.svg";
import React from "./Icon.assets/react.svg";
import Html from "./Icon.assets/html.svg";
import Express from "./Icon.assets/express.svg";
import Next from "./Icon.assets/next.svg";
import Node from "./Icon.assets/node.svg";
import Ts from "./Icon.assets/ts.svg";
import Js from "./Icon.assets/js.svg";

export const ICONS = {
  github: Github,
  light: Light,
  burger: Burger,
  css: Css,
  react: React,
  html: Html,
  express: Express,
  next: Next,
  node: Node,
  ts: Ts,
  js: Js,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

import { SVGProps } from "react";
import { ICONS } from "./registry";

export type TIconName = keyof typeof ICONS;

export type IIconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  icon: TIconName;
  size?: number;
  title?: string;
};
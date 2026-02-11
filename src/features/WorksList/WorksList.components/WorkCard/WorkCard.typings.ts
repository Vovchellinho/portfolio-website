import { ITagProps } from "@shared/ui/Tag";
import { StaticImageData } from "next/image";

export interface IWorkCardProps {
  name: string;
  description: string;
  tags: ITagProps[];
  image: StaticImageData;
  year: string;
}
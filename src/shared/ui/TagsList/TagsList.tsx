import { ITagsListProps } from "./TagsList.typings";
import { Tag } from "@shared/ui/Tag";

import styles from "./TagsList.module.css";

export const TagsList = ({ tags, className }: ITagsListProps) => {
  const classNames = [
    styles['TagsList'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {tags.map(tag => <Tag key={tag.text} {...tag} />)}
    </div>
  );
};
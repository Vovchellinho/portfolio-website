import { IWorkCardProps } from "./WorkCard.typings";
import Image from "next/image";
import { TagsList } from "@shared/ui/TagsList";

import styles from "./WorkCard.module.css";

export const WorkCard = ({
  name,
  description,
  image,
  tags,
  year,
}: IWorkCardProps) => {
  return (
    <div className={styles['WorkCard']}>
      <div className={styles['WorkCard-Top']}>
        <h3 className={styles['WorkCard-TopName']}>{name}</h3>
        <span className={styles['WorkCard-TopYear']}>{year}</span>
      </div>
      <Image
        className={styles['WorkCard-Image']}
        src={image}
        alt={name}
        height={372}
      />
      <div className={styles['WorkCard-Info']}>
        <TagsList tags={tags} />
        <h4 className={styles['WorkCard-InfoDescription']}>{description}</h4>
      </div>
    </div>
  );
};
import { ITabsProps } from "./Tabs.typings";
import { useState } from "react";
import { INIT_TABS } from "./Tabs.const";

import styles from "./Tabs.module.css";


export const Tabs = ({ className }: ITabsProps) => {
  const classNames = [
    className,
    styles['Tabs']
  ].filter(Boolean).join(' ');

  const [tabs, setTabs] = useState(INIT_TABS);

  return (
    <div className={classNames}>
      <div>

      </div>
      <div>
        
      </div>
    </div>
  );
};
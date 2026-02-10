"use client";

import { ITabsProps } from "./Tabs.typings";
import { useCallback, useState } from "react";
import { INIT_TAB_ID, INIT_TABS, TABS_DESCRIPTION } from "./Tabs.const";
import { Tab, TCompanyId } from "./Tabs.components/Tab";
import { IDescriptionProps } from "./Tabs.components/Description/Description.typings";
import { Description } from "./Tabs.components/Description";

import styles from "./Tabs.module.css";

export const Tabs = ({ className }: ITabsProps) => {
  const classNames = [
    className,
    styles['Tabs']
  ].filter(Boolean).join(' ');

  const [tabs, setTabs] = useState(INIT_TABS);
  const [tabDescription, setTabDescription] = useState<IDescriptionProps>(TABS_DESCRIPTION[INIT_TAB_ID]);  

  const handleUpdateTab = useCallback((id: TCompanyId) => {
    setTabDescription(TABS_DESCRIPTION[id]);
    setTabs(prevTabs => {
      return prevTabs.map(tab => ({
        ...tab,
        active: tab.id === id,
      }));
    })
  }, [setTabs, setTabDescription]);

  return (
    <div className={classNames}>
      <div className={styles['Tabs-Container']}>
        {tabs.map(tab => <Tab key={tab.id} {...tab} onClick={handleUpdateTab} />)}
      </div>
      <div className={styles['Tabs-Content']}>
        <Description {...tabDescription} />
      </div>
    </div>
  );
};
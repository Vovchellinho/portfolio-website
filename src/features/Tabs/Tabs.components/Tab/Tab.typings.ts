import { TIconName } from "@components/Icon";

export type TCompanyId = 'google' | 'octupus' | 'varlik'

export interface ITabProps {
  id: TCompanyId;
  active: boolean;
  icon: TIconName;
  company: string;
  position: string;
  onClick: (id: string) => void;
}
import { TIconName } from "@shared/ui/Icon";

export type TCompanyId = 'google' | 'octupus' | 'varlik'

export interface ITabProps {
  id: TCompanyId;
  active: boolean;
  icon: TIconName;
  company: string;
  position: string;
  onClick: (id: TCompanyId) => void;
}
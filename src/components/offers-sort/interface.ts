import {SyntheticEvent} from "react";

export interface Props {
  activeSort: string,
  isOpen: boolean,
  clickSortHandler: (evt: SyntheticEvent) => void,
  toggleSortHandler: () => void
}

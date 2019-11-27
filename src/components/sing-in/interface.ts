import {SyntheticEvent} from "react";

export interface Props {
  city: string,
  onUserInput: (evt: SyntheticEvent) => void,
  onFormSubmit: (evt: SyntheticEvent) => void
}
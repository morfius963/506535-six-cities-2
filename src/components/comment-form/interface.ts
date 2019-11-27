import {SyntheticEvent} from "react";

export interface Props {
  onFormSubmit: (evt: SyntheticEvent) => void,
  onUserInput: (evt: SyntheticEvent) => void,
  isValid: boolean,
  formRef: {
    current: HTMLFormElement
  }
}

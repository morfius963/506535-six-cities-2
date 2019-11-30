import {UserData} from "../../types";

export interface Props {
  city: string,
  isAuthorizationRequired: boolean,
  onUserDataPost: (userData: UserData, pushPath: () => void) => void
}
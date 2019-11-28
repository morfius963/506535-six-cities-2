import {Offer, UserData} from "../../types";

export interface Props {
  offers: Offer[],
  city: string,
  isAuthorizationRequired: boolean,
  isOffersLoading: boolean,
  onOffersLoad: () => void,
  onUserDataPost: (userData: UserData, pushPath: () => void) => void
}
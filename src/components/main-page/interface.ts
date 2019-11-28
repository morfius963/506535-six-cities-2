import {Offer} from "../../types";

export interface Props {
  allCities: string[],
  activeOffers: Offer[],
  city: string,
  email: string,
  isAuthorizationRequired: boolean,
  onCityClick: (city: string) => void,
}

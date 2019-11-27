import {Offer} from "../../types";

export interface Props {
  allCities: string[],
  activeOffers: Offer[],
  city: string,
  activeSort: string,
  userData: {
    email: string
  },
  isAuthorizationRequired: boolean,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onCityClick: (city: string) => void,
  onOffersSort: (value: string) => void,
}

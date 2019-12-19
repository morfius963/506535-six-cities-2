import {Offer} from "../../types";

export interface Props {
  allCities: string[],
  activeOffers: Offer[],
  city: string,
  onCityClick: (city: string) => void,
}

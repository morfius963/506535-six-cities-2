import {Offer} from "../../types";

export interface Props {
  offers: Offer[],
  isOffersLoading: boolean,
  onOffersLoad: () => void,
}
import {Offer} from "../../types";

export interface Props {
  offers: Offer[],
  activeCard: number,
  isInOfferDetails: boolean | undefined
}

import {Offer, OfferRefData} from "../../types";

export interface Props {
  offers: Offer[],
  offersRefs: OfferRefData[],
  activeCard: number
}

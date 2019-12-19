import {Offer} from "../../types";

export interface Props {
  favoriteOffers: Offer[],
  onFavoriteCardToggle: (id: number, status: number) => void,
  onFavoriteOffersLoad: () => void
}

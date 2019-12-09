import {Offer} from "../../types";

export interface Props {
  favoriteOffers: Offer[],
  email: string,
  avatar: string,
  isAuthorizationRequired: boolean,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onFavoriteOffersLoad: () => void
}

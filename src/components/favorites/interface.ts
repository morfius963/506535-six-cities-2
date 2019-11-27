import {Offer} from "../../types";

export interface Props {
  favoriteOffers: Offer[],
  userData: {
    email: string
  },
  isAuthorizationRequired: boolean,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onFavoriteOffersLoad: () => void
}

import {Offer} from "../../types";

export interface Props {
  offers: Offer[],
  activeSort: string,
  city: string,
  activeCardId: number,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onCardMouseEnter: (id: number) => void,
  onOffersSort: (value: string) => void,
}

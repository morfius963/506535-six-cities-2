import {Offer} from "../../types";

export interface Props {
  offers: Offer[],
  activeCity: string,
  activeCardId: number,
  activeSort: string,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onCardMouseEnter: (id: number) => void,
  onOffersSort: (value: string) => void,
}

import {Offer} from "../../types";

export interface Props {
  offerData: Offer,
  isInFavoriteList: boolean | undefined,
  onCardMouseEnter: (id: number) => void | null,
  onFavoriteCardToggle: (id: number, status: number) => void,
}

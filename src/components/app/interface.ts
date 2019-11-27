import {Offer, Comment, UserData, CommentData, Sort} from "../../types";

export interface Props {
  offers: Offer[],
  activeOffers: Offer[],
  favoriteOffers: Offer[],
  activeSort: Sort,
  city: string,
  email: string,
  isAuthorizationRequired: boolean,
  isOffersLoading: boolean,
  comments: Comment[],

  onOffersLoad: () => void,
  onFavoriteOffersLoad: () => void,
  onCityClick: (city: string) => void,
  onOffersSort: (value: Sort) => void,
  onUserDataPost: (userData: UserData, pushPath: () => void) => void,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onCommentsLoad: (id: number) => void,
  onReviewSubmit: (id: number, commentData: CommentData, formResetCb: () => void) => void
}
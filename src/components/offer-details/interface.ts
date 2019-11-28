import {Offer, CommentData, Comment} from "../../types";

export interface Props {
  offers: Offer[],
  comments: Comment[],
  location: {
    state: {
      id: number
    }
  },
  email: string,
  isAuthorizationRequired: boolean,
  onCommentsLoad: () => void,
  onFavoriteCardToggle: (id: number, status: number) => void,
  onReviewSubmit: (id: number, commentData: CommentData, formResetCb: () => void) => void
}

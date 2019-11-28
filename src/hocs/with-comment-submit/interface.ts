import {CommentData} from "../../types";

export interface Props {
  id: number,
  onReviewSubmit: (id: number, commentData: CommentData, formResetCb: () => void) => void
}

export interface State {
  rating?: string,
  review?: string,
  isValid?: boolean
}

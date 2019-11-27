import {Comment} from "../../types";

export interface Props {
  id: number,
  comments: Comment[],
  onCommentsLoad: (id: number) => void
}

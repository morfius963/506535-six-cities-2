export interface Props {
  setCityRating: (rating: string) => void,
  rating: string,
  city: string
}

export interface State {
  rating: string
}
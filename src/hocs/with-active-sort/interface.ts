export interface Props {
  onOffersSort: (value: string) => void,
  activeSort: string,
  city: string
}

export interface State {
  activeCity: string,
  isOpen: boolean
}

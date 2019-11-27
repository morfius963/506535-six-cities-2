export interface Props {
  cities: string[],
  activeCity: string,
  onCityClick: (city: string) => void
}

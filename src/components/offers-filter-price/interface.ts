import {Offer} from "../../types";

export interface State {
  defaultPrice: number[],
  currentPrice: number[]
};

export interface Props {
  offers: Offer[],
  city: string,
  priceRange: number[],
  setPriceRange: (range: number[]) => void
};

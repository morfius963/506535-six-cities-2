interface User {
  id: number,
  isPro: boolean,
  name: string,
  avatarUrl: string,
}

interface Location {
  latitude: number,
  longitude: number,
  zoom: number
}

interface City {
  name: string,
  location: Location
}

export interface UserData {
  email: string,
  password: string
}

export interface Comment {
  user: User,
  id: number,
  rating: number,
  comment: string,
  date: string
}

export interface CommentData {
  rating: string,
  comment: string
}

export interface Offer {
  city: City,
  host: User,
  location: Location,
  images: string[],
  goods: string[],
  title: string,
  previewImage: string,
  type: string,
  description: string,
  isFavorite: boolean,
  isPremium: boolean,
  id: number,
  price: number,
  rating: number,
  bedrooms: number,
  maxAdults: number
};

export type Sort = `Popular` | `Price: low to high` | `Price: high to low` | `Top rated first`;

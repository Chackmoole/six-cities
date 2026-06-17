import { CITIES } from '../data/cities';

export interface IOffer {
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  description: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  id: number;
}

export interface IOfferState {
  city: {
    name: string | null;
    location: {
      latitude: number | null;
      longitude: number | null;
      zoom: number | null;
    };
  };
  previewImage: string | null;
  images: string[] | null;
  title: string | null;
  isFavorite: boolean | null;
  isPremium: boolean | null;
  rating: number | null;
  type: 'apartment' | 'room' | 'house' | 'hotel' | null;
  bedrooms: number | null;
  maxAdults: number | null;
  price: number | null;
  goods: string[] | null;
  host: {
    id: number | null;
    name: string | null;
    isPro: boolean | null;
    avatarUrl: string;
  };
  description: string | null;
  location: {
    latitude: number | null;
    longitude: number | null;
    zoom: number | null;
  };
  id: number | null;
}

export type ICitiesName = (typeof CITIES)[number];

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: ICitiesName;
  location: ILocation;
}

interface IUserReview {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IReview {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: IUserReview;
}

export interface ISortOption {
  value: string;
  label: string;
}

export type IAuthorizationStatus = 'auth' | 'noAuth' | 'unknown';

export interface IAuth {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

import {CITIES} from '../data/cities';

export interface IOffer {
  city:{
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
  host:{
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  description: string;
  location:{
    latitude: number;
    longitude: number;
    zoom: number;
  };
  id: number;
}

export type ICitiesName = typeof CITIES[number];

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: ICitiesName;
  location: ILocation;
}

interface IUserReviews {
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
  user: IUserReviews;
}

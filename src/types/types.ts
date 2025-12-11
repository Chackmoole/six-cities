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
  type: string;
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

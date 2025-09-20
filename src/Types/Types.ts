export type Reviews = {
  _id: string;
  review: string;
  rating: number;
  user: "string";
  tour: string;
};

export interface TourSimple {
  id: number;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: string[];
  stops: number;
  startLocation: string;
}
export interface Location {
  _id: string;
  description: string;
  type: string;
  coordinates: [number, number];
  day: number;
}

interface StartLocation {
  description: string;
  type: string;
  coordinates: [number, number];
  address: string;
}

export interface Tour {
  startLocation: StartLocation;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  startDates: string[];
  id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  guides: string[];
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Location[];
}
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
  photo: string;
  password: string;
}
export type TourType = "all" | "easy" | "medium" | "difficult";

//this type is for the tour details page sections
export type TourSecProps = {
  tourData: Tour;
};

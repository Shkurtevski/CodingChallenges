export interface Links {
  text: string;
  url: string;
  id: string;
}

export interface Filters {
  text: string;
  id: string;
  category: string;
}

export interface Images {
  name: string;
  path: string;
}

export interface TitleFooter {
  text: string;
}

export interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}
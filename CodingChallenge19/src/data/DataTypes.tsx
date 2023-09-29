export interface ImageProps {
  id?: number;
  backgroundImage: string;
  altText: string;
  text: string;
}

export interface ArtistProps {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: {
    albumId: string;
    title: string;
    year: number;
    price: number;
    cover: string;
  }[];
}

export interface ArtistImages {
  [key: string]: string;
}

export interface Props {
  artists: ArtistProps[];
}
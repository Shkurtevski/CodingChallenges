import ArtistItem from "./sub-components/ArtistItem";
import artists from "../data/db";
import { ArtistImages } from "../data/DataTypes";

interface Props {
  title: string;
}

const artistsImages: ArtistImages = artists.reduce((acc, artist) => {
  acc[artist.name] = require(`../images/covers/${artist.cover}.jpg`);
  return acc;
}, {} as ArtistImages);

const ArtistsList = ({ title }: Props) => {
  return (
    <div className="artists-list">
      <h2>{title}</h2>
      {artists.map((artist) => (
        <ArtistItem
          key={artist.id}
          id={artist.id}
          backgroundImage={artistsImages[artist.name]}
          altText={artist.name}
          text={artist.name}
        />
      ))}
    </div>
  );
};

export default ArtistsList;

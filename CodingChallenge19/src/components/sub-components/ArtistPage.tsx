import { useParams } from "react-router-dom";
import { ArtistImages } from "../../data/DataTypes";
import AlbumsList from "./AlbumsList";
import {Props} from "../../data/DataTypes";
import Error from "../Error";

const ArtistPage = ({ artists }: Props) => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((artist) => artist.id === Number(id));

  if (!artist) {
    return <Error/>;
  }

  const artistsImages: ArtistImages = artists.reduce((acc, artist) => {
    acc[artist.name] = require(`../../images/covers/${artist.cover}.jpg`);
    artist.albums.forEach((album) => {
      acc[album.albumId] = require(`../../images/albums/${album.cover}.jpg`);
    });
    return acc;
  }, {} as ArtistImages);

  return (
    <div className="artist-page">
      <img
        src={artistsImages[artist.name]}
        alt={artist.name}
        className="artist-page-img"
      />
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
      <AlbumsList artists={artists} />
    </div>
  );
};

export default ArtistPage;

import { useParams } from "react-router-dom";
import { ArtistImages } from "../../data/DataTypes";
import { Link } from "react-router-dom";
import { Props } from "../../data/DataTypes";
import Error from "../Error";

const ArtistPage = ({ artists }: Props) => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((artist) => artist.id === Number(id));

  if (!artist) {
    return <Error />;
  }

  const artistsImages: ArtistImages = artists.reduce((acc, artist) => {
    artist.albums.forEach((album) => {
      acc[album.albumId] = require(`../../images/albums/${album.cover}.jpg`);
    });
    return acc;
  }, {} as ArtistImages);

  return (
    <div className="image-wrapper">
      {artist.albums.map((album) => (
        <div key={album.albumId} className="album-image">
          <Link to={`/artist/${id}/${album.albumId}`}>
            <img src={artistsImages[album.albumId]} alt={album.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistPage;

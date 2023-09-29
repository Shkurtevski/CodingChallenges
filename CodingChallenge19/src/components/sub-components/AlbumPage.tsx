import React from "react";
import { useParams } from "react-router-dom";
import { Props, ArtistProps } from "../../data/DataTypes";
import Error from "../Error";

const AlbumPage = ({ artists }: Props) => {
  const { id, albumId } = useParams<{ id: string; albumId: string }>();

  const artist: ArtistProps | undefined = artists.find(
    (artist) => artist.id === Number(id)
  );

  if (!artist) {
    return <Error />;
  }

  const album = artist.albums.find((album) => album.albumId === albumId);

  if (!album) {
    return <Error />;
  }

  return (
    <div className="album-page">
      {album && (
        <React.Fragment>
          <img
            src={require(`../../images/albums/${album.cover}.jpg`)}
            alt={album.title}
          />
          <p>
            <strong>Title:</strong> {album.title}
          </p>
          <p>
            <strong>Year:</strong> {album.year}
          </p>
          <p>
            <strong>Price:</strong> ${album.price}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default AlbumPage;

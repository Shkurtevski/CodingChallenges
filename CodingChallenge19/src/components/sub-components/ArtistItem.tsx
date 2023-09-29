import { ImageProps } from "../../data/DataTypes";
import { Link } from "react-router-dom";

const ArtistItem = ({ id, backgroundImage, altText, text }: ImageProps) => {
  const artistPageUrl = `/artist/${id}`;
  return (
    <Link to={artistPageUrl}>
      <div className="artist-item">
        <div className="artist-content">
          <img src={backgroundImage} alt={altText} />
          <h4>{text}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ArtistItem;

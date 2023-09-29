import { Link } from "react-router-dom";
import { ImageProps } from "../data/DataTypes";

const Navbar = ({ backgroundImage, altText, text }: ImageProps) => {
  return (
    <nav>
      <Link to="/">
        <img src={backgroundImage} alt={altText} />
        <h1>{text}</h1>
        <div className="aqua"></div>
      </Link>
    </nav>
  );
};

export default Navbar;

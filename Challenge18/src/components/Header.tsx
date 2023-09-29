import logo from "../img/logo.png";
import { Links } from "../data/DataTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  links: Links[];
  icons: IconDefinition[];
}

const Header = ({ links, icons }: Props) => {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        {links.map(({ id, url, text }) => (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
      <div className="icons">
        {icons.map((icon, index) => (
          <i key={index}>
            <FontAwesomeIcon icon={icon} />
          </i>
        ))}
      </div>
    </nav>
  );
};

export default Header;

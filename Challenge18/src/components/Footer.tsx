import React from "react";
import { Links } from "../data/DataTypes";
import { TitleFooter } from "../data/DataTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  links: Links[];
  socialIcons: IconDefinition[];
  numDivs: number;
  titles: TitleFooter[];
}

const Footer: React.FC<Props> = ({ links, socialIcons, numDivs, titles }) => {
  const linksPerDiv = Math.ceil(links.length / numDivs);

  const linkSets = [];
  for (let i = 0; i < links.length; i += linksPerDiv) {
    linkSets.push(links.slice(i, i + linksPerDiv));
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="links">
          <div className="icons">
            <p>{titles[0].text}</p>
            {socialIcons.map((socialIcon, index) => (
              <i key={index}>
                <FontAwesomeIcon icon={socialIcon} />
              </i>
            ))}
          </div>
          {linkSets.map((linkSet, setIndex) => (
            <div key={setIndex} className="links-wrapper">
              <p>{titles[setIndex + 1].text}</p>
              <ul>
                {linkSet.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

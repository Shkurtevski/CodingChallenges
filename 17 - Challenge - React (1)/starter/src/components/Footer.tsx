import React from "react";

interface Props {
  links: {
    text: string;
    url: string;
  }[];
}

const Footer = ({ links }: Props) => {
  return (
    <div className="footer">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Footer;

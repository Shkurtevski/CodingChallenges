import React from "react";

interface Props {
  title: string;
  text: string;
  image: string;
}

const Place = ({ title, text, image }: Props) => {
  const placeStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="place" style={placeStyle}>
      <div className="place-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Place;

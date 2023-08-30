import React from "react";

interface Props {
  title: string;
  text: string;
  image: string;
}

const DetailsBlock = ({ text, image, title }: Props) => {
  return (
    <div className="details-block">
      <div className="details-block-inner">
        <div className="text-content">
          <p className="about">about</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image">
          <img src={image} alt="nature" />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;

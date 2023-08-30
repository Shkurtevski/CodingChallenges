import React from "react";

interface Props {
  text: string;
  title: string;
  buttonText: string;
}

const Banner = ({ text, title, buttonText }: Props) => {
  return (
    <div className="banner">
      <div className="banner-inner">
        <p>{text}</p>
        <h1>{title}</h1>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Banner;

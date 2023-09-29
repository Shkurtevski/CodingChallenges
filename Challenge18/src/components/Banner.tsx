import React from "react";

interface Props {
  title: string;
}

const Banner = ({ title }: Props) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
    </React.Fragment>
  );
};

export default Banner;

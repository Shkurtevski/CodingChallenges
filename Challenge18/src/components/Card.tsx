import React from "react";

interface Props {
  brand: string;
  price: number;
  image: string;
}

const Card = ({ brand, price, image }: Props) => {

  return (
    <div className="card">
      <img src={image} alt={brand} />
      <div className="card-body">
        <p>{brand}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default Card;

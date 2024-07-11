import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
}

const Offer: React.FC<OfferProps> = ({ title, description, imagesrc }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imagesrc} alt="Offer" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold font-s">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;

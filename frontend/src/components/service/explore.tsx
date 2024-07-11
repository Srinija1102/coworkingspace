import React from "react";

interface OfferProps {
  title: string;
  description: string;
  imagesrc: string;
}

const Explore: React.FC<OfferProps> = ({ title, description, imagesrc }) => {
  return (
    <div className="w-auto max-w-2xl">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={imagesrc} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end  flex flex-col ">
            <p className="text-1xl">
              Starting from{" "}
              <span className="text-red-700 text-2xl">Rs 999 hr</span>
            </p>
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

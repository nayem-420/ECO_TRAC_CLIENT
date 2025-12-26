import React from "react";
import { Link } from "react-router";

const ChallengeListCard = ({ challenge }) => {
  const {
    _id,
    title,
    description,
    imageUrl,
    category,
    duration,
    impactMetric,
    participants,
  } = challenge;

  return (
    <div className="card bg-base-200 shadow-md">
      <figure>
        <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="text-sm opacity-70 line-clamp-3">{description}</p>

        <div className="mt-2 text-sm">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {duration} days
          </p>
          <p>
            <span className="font-semibold">Impact:</span> {impactMetric}
          </p>
          <p>
            <span className="font-semibold">Participants:</span> {participants}
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/api/challenges/${_id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeListCard;

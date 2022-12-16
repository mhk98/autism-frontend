import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ profile }) => {
  //   console.log(profile);
  const { name, expertise, description } = profile;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-12">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">
          <span className="font-bold">Expertise:</span> {expertise}
        </p>
        <span className="font-bold">About {name}</span>
        <p>{description}</p>
        <Link to="/payment">
          <button className="btn">Booked</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;

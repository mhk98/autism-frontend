import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState([]);
  console.log("profile", profile);
  fetch(`http://localhost:5000/profile/${id}`)
    .then((res) => res.json())
    .then((data) => setProfile(data));
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-12 mx-auto mt-12">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Doctor Profile</h2>
          <h2 className="card-title">{profile.name}</h2>
          <p className="">
            <span className="font-bold">Expertise:</span> {profile.expertise}
          </p>
          <span className="font-bold">About {profile.name}</span>
          <p>{profile.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

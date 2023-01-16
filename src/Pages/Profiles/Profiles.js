import React from "react";
import { useState } from "react";
import Profile from "./Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  fetch("http://localhost:5000/profile")
    .then((res) => res.json())
    .then((data) => setProfiles(data));
  return (
    <div className="grid grid-cols-3 gap-12 mt-12">
      {profiles.map((profile) => (
        <Profile key={profile._id} profile={profile}></Profile>
      ))}
    </div>
  );
};

export default Profiles;

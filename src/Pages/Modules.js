// import { Link } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Service from "./Appointment/Service";

const Modules = () => {
  const { id } = useParams();
  console.log(id);
  const [modules, setModules] = useState([]);
  console.log("modules", modules);
  fetch(`http://localhost:5000/module/${id}`)
    .then((res) => res.json())
    .then((data) => setModules(data));
  return (
    <div>
      {/* <h2 className="text-xl font-bold ml-6 mt-16">Doctors Profile</h2> */}
      {/* <div className="card w-96 bg-base-100 shadow-xl mb-12"> */}
      {/* <img src={doctor} alt="" width={150} /> */}

      {/* <div className="card-body">
          <h2 className="card-title">Ali Naheed</h2>
          <img src={doctor} alt="" />
          <p className="">
            <span className="font-bold">Expertise:</span> Many experts have
            expertise treating multiple conditions. MediFind uses a variety of
            data sources to determine what conditions a expert treats and their
            level of experience
          </p>
          <span className="font-bold">About Ali Naheed</span>
          <p>
            Ali Naheed practices in Dhaka, Bangladesh. Naheed is rated as an
            Experienced expert by MediFind in the treatment of Autism Spectrum
            Disorder. Her top areas of expertise are Pneumococcal Meningitis,
            Hypertension, Bacterial Meningitis, and Strep Throat.
          </p>
        </div> */}
      {/* </div> */}

      <div className="mb-12">
        {/* <li>
          You will learn About the autism spectrum and what it means to be
          autistic
        </li>
        <li>
          You will understand How to deal with a child's tantrums and emotional
          outbursts in an effective and caring way
        </li>
        <li>
          You will learn About all the various educational programs and schools
          that can help an autistic child or autistic person learn to function
          at their highest level in society
        </li>
        <li>You will learn How to recognize the symptoms of autism</li>
        <li>
          You will learn About various therapeutic treatments and methods to
          help teach someone with autism how to better communicate and relate to
          the world
        </li>
        <li>
          You will learn How to effectively express emotion and show autistic
          children that they are loved - without sending them into sensory
          overload
        </li>
        <li>
          You will learn How to find the best doctors for someone's needs -
          including a pediatrician, physician, clinical psychologist, and speech
          therapist
        </li>
        <li>
          You will learn How to establish links with communication between
          yourself and someone with autism
        </li> */}
      </div>

      <div className="card lg:card-side bg-base-100 shadow p-4 gap-8 w-full">
        <div className="flex flex-col gap-2">
          {/* <figure> */}
          <img className="h-56" src={modules.img} alt="Album" />
          {/* </figure> */}

          <Link
            to={`/doctorprofile/${modules.profileid}`}
            className="btn my-4 bg-[#0FCEE6] border-none text-white"
          >
            View Profile
          </Link>
        </div>
        <div className="card-body">
          <h2 className="text-xl font-bold">What you'll learn</h2>
          <li>{modules.parta}</li>
          <li>{modules.partb}</li>
          <li>{modules.partc}</li>
          <li>{modules.partd}</li>
        </div>
      </div>
    </div>
  );
};

export default Modules;

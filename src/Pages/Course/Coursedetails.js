import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Payment from "../Payment/Payment";
import "./Course.css";
const Coursedetails = ({ tool }) => {
  const navigate = useNavigate();
  const {
    _id,
    courseName,
    institutionName,
    courseDuration,
    courseDetails,
    coursePrice,
    image,
    code,
  } = tool;
  localStorage.setItem("coursePrice", coursePrice);
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <p class=" font-bold text-secondary">Course Name:{courseName}</p>
        <img src={image} alt="" />
        <p class=" font-bold text-secondary">
          Instituion Name:{institutionName}
        </p>
        <p class=" font-bold text-secondary">
          Course Duration:{courseDuration}
          <span>Months</span>
        </p>
        <p class=" font-bold text-secondary">Course Details :{courseDetails}</p>
        <p class=" font-bold text-secondary">
          price :{coursePrice} <span>BDT</span>
        </p>
        <p class=" font-bold text-secondary">code : {code}</p>
        <Link to={`/profile/${coursePrice}`} className="btn btn-success">
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default Coursedetails;

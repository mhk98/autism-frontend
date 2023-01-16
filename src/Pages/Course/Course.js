import React, { useEffect, useState } from "react";
import Payment from "../Payment/Payment";
import Coursedetails from "./Coursedetails";
const Course = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/course`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12 font-bold ">
        Available Courses{" "}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses?.map((tool) => (
          <Coursedetails key={tool._id} tool={tool}></Coursedetails>
        ))}
      </div>
    </div>
  );
};

export default Course;

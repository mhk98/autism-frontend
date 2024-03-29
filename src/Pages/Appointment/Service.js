import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price, venue, description } = service;
  // console.log("service", service);
  // console.log(name, slots, price, moduleid);

  console.log("service", service);
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            // <span>{slots[0]}</span>
            <span></span>
          ) : (
            <span className="text-red-500">Try another date.</span>
          )}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "seats" : "seat"} available
        </p>
        <p>
          <span className="font-bold">Venue:</span> {venue}
        </p>
        <p>
          <small>
            <span className="font-bold">Price:</span> {price} Taka
          </small>
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            {/* <Link to={`module/${moduleid}`}>Booked</Link> */}
            {/* <Link to="/module">Booked</Link> */}
            booked
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;

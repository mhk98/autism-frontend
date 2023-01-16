import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { price } = useParams();
  const handleCheckout = (event) => {
    event.preventDefault();
    const info = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
      amount: event.target.amount.value,
    };
    // const email = user?.email;

    fetch("http://localhost:5000/sslrequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.open(data.data.GatewayPageURL);
        }
      });
  };
  return (
    <div className="mt-8 mb-8 flex justify-center place-content-center w-full h-screen items-center mx-auto">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center  dark:text-gray-100">
          Payment
        </h2>

        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleCheckout}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Email
              </span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Phone Number
              </span>
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Your Full Name"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text font-bold dark:text-white">
                Amount
              </span>
            </label>
            <input
              type="text"
              name="amount"
              value={price}
              placeholder="Enter Your Amount"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Payment;

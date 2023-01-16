import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transactionId } = useParams();
  const [paymentSuccess, setPaymentSuccess] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/sslsuccess/${transactionId}`)
      .then((res) => res.json())
      .then((data) => setPaymentSuccess(data));
  }, []);
  return (
    <div className=" flex justify-center justify-items-center bg-white py-12">
      {/* <div>
        <h1 className="text-xl text-green-500">
          Your transactionId is: {transactionId}
        </h1>
        <h1 className="text-xl">Paid amount:{paymentSuccess.amount}</h1>
        <h1 className="text-xl">Payment Status:{paymentSuccess.status}</h1>
        <h1 className="text-xl">Bank Type:{paymentSuccess.card_issuer}</h1>
      </div> */}
      <div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body w-full">
            <div className="text-center">
              <FontAwesomeIcon
                className="text-5xl text-green-700 mb-4"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h3 className="font-bold text-lg mb-5">Recharge Success!</h3>
            </div>
            <h1 className="text-xl text-green-500">
              Your transactionId is: {transactionId}
            </h1>
            <h1 className="text-xl">Paid amount:{paymentSuccess.amount}</h1>
            <h1 className="text-xl">Payment Status:{paymentSuccess.status}</h1>
            <h1 className="text-xl">Bank Type:{paymentSuccess.card_issuer}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

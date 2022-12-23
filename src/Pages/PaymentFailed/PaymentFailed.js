import React from "react";
import { useParams } from "react-router-dom";

const PaymentFailed = () => {
  const { transactionId } = useParams();
  console.log(transactionId);
  return (
    <div className="text-center">
      <h2>Your transactionId is: {transactionId}</h2>
      <h2 className="text-red-500 text-2xl text-center">
        Something went wrong
      </h2>
    </div>
  );
};

export default PaymentFailed;

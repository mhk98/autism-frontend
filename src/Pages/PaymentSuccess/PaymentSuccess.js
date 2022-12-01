import React from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Your transactionId is: {transactionId}</h1>
      <h1 className="text-green-500">Success</h1>
    </div>
  );
};

export default PaymentSuccess;

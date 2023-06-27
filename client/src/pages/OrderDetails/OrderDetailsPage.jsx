// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { orderNo } = useParams();
  return <p>OrderDetailsPage {orderNo}</p>;
};
export default OrderDetailsPage;

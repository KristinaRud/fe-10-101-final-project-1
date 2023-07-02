/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, CircularProgress } from "@mui/material";
import { getOrderByOrderNo } from "../../store/actionCreator/orders.actionCreator";
import { selectOrders } from "../../store/selectors/orders.selector";
import AddressBook from "../../components/Dashboard/Description/AddressBook";
import styles from "./OrderDetailsPage.module.scss";

const OrderDetailsPage = () => {
  const { orderNo } = useParams();
  const dispatch = useDispatch();
  const { order, isLoading } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrderByOrderNo(orderNo));
  }, [dispatch, orderNo]);
  if (isLoading) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Order № {orderNo}
      </Typography>
      <div>
        <p>
          Дата оформлення замовлення:{" "}
          {order?.date !== undefined
            ? order?.date.replace(/T.*/, "")
            : "Date is undefined"}
        </p>
        <p>Статус замовлення: Відправлене</p>
      </div>
      <div className={styles.mainInfo}>
        <AddressBook
          address={order || "You have not set a default billing address."}
        />
        <div>
          <h3 className={styles.title}>Method of delivery</h3>
          <p>{order?.postOffice}</p>
        </div>
        <div>
          <h3 className={styles.title}>Payment method</h3>
          <p>{order?.paymentMethod}</p>
        </div>
      </div>
      <div>
        <h3 className={styles.title}>Ordered products</h3>
        <div className={styles.sellerLabel}>
          <span>
            <b className="seller-name">TechnoKit</b> order
          </span>
          <span className="custom-label-additional">
            <span className="store-order-number">№ {orderNo}</span> -
            Відправлене
          </span>
        </div>
        <div className={styles.order}>
          <div className={styles.orderList}>
            <div>
              <img
                className={styles.images}
                src={order?.products[0].product.imageUrls[0]}
                alt="product"
              />
            </div>
            <div className={styles.orderInfo}>
              <h3 className={styles.orderTitle}>
                {order?.products[0].product.brand}
              </h3>
              <a href="#" className={styles.graytxt}>
                {order?.products[0].product.name}
              </a>
              <p>
                Quantity:
                <span className={styles.graytxt}>
                  {order?.products[0].cartQuantity} x&nbsp;
                  {order?.products[0].product.currentPrice}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.price}>
            <p className={styles.graytxt}>
              <s>{order?.products[0].product.previousPrice}₴</s>
            </p>
            <p className={styles.redtxt}>
              {order?.products[0].product.currentPrice}₴
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetailsPage;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./OrderSummary.module.scss";
import { selectOrders } from "../../../store/selectors/orders.selector";
import { selectShoppingCart } from "../../../store/selectors/shoppingCart.selector";
import { selectCustomers } from "../../../store/selectors/customers.selector";
import { totalQuantity } from "../../../utils/products/totalQuantity";

const OrderSummary = () => {
  const { products } = useSelector(selectOrders);
  const { itemsCart } = useSelector(selectShoppingCart);
  const { isLogin } = useSelector(selectCustomers);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (products?.length > 0) {
      const quantity = totalQuantity(products);
      setQuantity(quantity);
    }
    if (itemsCart?.length > 0) {
      const quantity = totalQuantity(itemsCart);
      setQuantity(quantity);
    }
  }, [itemsCart, products]);

  return (
    <div className={s.wrapper}>
      <Stepper activeStep={1} alternativeLabel className={s.stepper}>
        <Step>
          <Link to={"/shopping-cart"}>
            <StepLabel className={s.step} sx={{ cursor: "pointer" }}>
              Shipping
            </StepLabel>
          </Link>
        </Step>
        <Step>
          <StepLabel className={s.stepLast}>Review & Payments</StepLabel>
        </Step>
      </Stepper>
      <div className={s["order-wrapper"]}>
        <Typography variant="h6" className={s["order-title"]}>
          Order Summary
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="order-summary-content"
            id="order-summary-header"
          >
            <Typography variant="h6" className={s["cart-title"]}>
              {quantity}
              {quantity > 1 ? " Items" : " Item"} in Cart
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={s["cart-products-wrapper"]}>
            {isLogin
              ? itemsCart.length > 0 &&
                itemsCart.map((item) => (
                  <div
                    key={item.description}
                    className={s["cart-product-wrapper"]}
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      className={s.img}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={s["product-name"]}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={s["product-price"]}
                      >
                        <span className={s.qty}>Qty {item.cartQuantity}</span>
                        {item.currentPrice}₴
                      </Typography>
                    </div>
                  </div>
                ))
              : products.length > 0 &&
                products?.map((item) => (
                  <div
                    key={item.product.name}
                    className={s["cart-product-wrapper"]}
                  >
                    <img
                      src={item.product.imageUrls[0]}
                      alt={item.product.name}
                      className={s.img}
                    />
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={s["product-name"]}
                      >
                        {item.product.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={s["product-price"]}
                      >
                        <span className={s.qty}>Qty {item.cartQuantity}</span>
                        {item.product.currentPrice}₴
                      </Typography>
                    </div>
                  </div>
                ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default OrderSummary;

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
import s from "./OrderSummary.module.scss";
import { products } from "./constants";

const steps = ["Shipping", "Review & Payments"];

const OrderSummary = () => {
  return (
    <div className={s.wrapper}>
      <Stepper activeStep={1} alternativeLabel className={s.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className={s.step}>{label}</StepLabel>
          </Step>
        ))}
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
              {products.length}
              {products.length >= 1 ? " Items" : " Item"} in Cart
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={s["cart-products-wrapper"]}>
            {products.map((product) => (
              <div key={product.name} className={s["cart-product-wrapper"]}>
                <img
                  src={product.imageUrls[0]}
                  alt={product.name}
                  className={s.img}
                />
                <div>
                  <Typography variant="subtitle1" className={s["product-name"]}>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={s["product-price"]}
                  >
                    <span className={s.qty}>Qty 1</span>
                    {product.currentPrice}₴
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

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectOrders } from "../../../store/selectors/orders.selector";
import Button from "../../Button/Button";
import styles from "./AddressBook.module.scss";

const AddressBook = ({ activeComponent }) => {
  const { allOrders } = useSelector(selectOrders);
  return (
    <Box>
      <h3 className={styles.title}>Address Book</h3>
      <Box
        sx={{
          display: "flex",
          gap: { sm: "40px", md: "40px", xl: "80px" },
          flexWrap: "wrap",
          justifyContent: { sm: "center", md: "start" },
        }}
      >
        <div className={styles["wrapper-address"]}>
          <h4 className={styles.address}>Default Billing Address</h4>
          <p className={styles.text}>
            {allOrders && allOrders.length > 0
              ? `${
                  allOrders[allOrders.length - 1].postOfficeBranch
                    .CityDescription
                }, ${allOrders[allOrders.length - 1]?.postOffice}, ${
                  allOrders[allOrders.length - 1]?.postOfficeBranch.Description
                }`
              : "You have not set a default billing address."}
          </p>
          <br />
        </div>
      </Box>
      {!activeComponent && (
        <div>
          <h4 className={styles.address}>Additional Addresses</h4>
          <div className={styles["wrapper-address"]}>
            <p className={styles.text}>You have not set an address.</p>
            <Button className={styles["btn-account"]}>Edit Address</Button>
          </div>
        </div>
      )}
    </Box>
  );
};

AddressBook.propTypes = {
  activeComponent: PropTypes.string,
};

AddressBook.defaultProps = {
  activeComponent: "",
};
export default AddressBook;

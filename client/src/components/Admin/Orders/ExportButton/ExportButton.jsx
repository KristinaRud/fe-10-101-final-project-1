import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { downloadExcel } from "react-export-table-to-excel";
import { headers } from "../OrdersTable/OrdersTableHeader/utils";
import { formatString } from "../../../../utils/string/formatString";

const ExportButton = ({ selected }) => {
  const { orders } = useSelector((state) => state.orders);

  const handleExportClick = () => {
    const header = headers.map((item) => item.name);
    const body = [];
    orders.orders.forEach((item) => {
      if (selected.includes(item.orderNo)) {
        const row = [];
        headers.forEach((header) => {
          if (header.field === "email") {
            row.push(`${item.email}/${item.firstName}/${item.lastName}`);
          } else if (header.field === "postOffice") {
            row.push(
              `${formatString(item.postOffice)}/${item.state.public_name.en}/${
                item.district.public_name.en
              }/${item.city.public_name.en}/${
                item.postOffice === "novaPoshta"
                  ? `Branch ${item.postOfficeBranch.Number}`
                  : `${item.postOfficeBranch.type_public} ${item.postOfficeBranch.num_showcase}`
              }`,
            );
          } else if (header.field === "paymentMethod") {
            row.push(`${item.paymentMethod}/${item.deliveryDetails}`);
          } else if (header.field === "products") {
            row.push(
              item.products
                .map(
                  (product) =>
                    `* Article ${product.product.itemNo} (${product.product.name} - ${product.cartQuantity} qty)`,
                )
                .join("\n"),
            );
          } else {
            row.push(item[header.field]);
          }
        });
        body.push(row);
      }
    });
    downloadExcel({
      fileName: `orders-${new Date().toLocaleDateString()}.xls`,
      sheet: `orders-${new Date().toLocaleDateString()}`,
      tablePayload: {
        header,
        body,
      },
    });
  };

  return (
    <Button
      variant={"outlined"}
      sx={{
        border: "2px solid #0156FF",
        borderRadius: "50px",
        color: "#0156FF",
        width: "fit-content",
        "&:hover": {
          border: "2px solid #0156FF",
          backgroundColor: "#0156FF",
          color: "white",
        },
      }}
      disabled={selected.length === 0}
      startIcon={<SaveAltIcon />}
      onClick={handleExportClick}
    >
      Export to EXCEL
    </Button>
  );
};

ExportButton.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ExportButton;

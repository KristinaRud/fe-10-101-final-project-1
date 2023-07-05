import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { headers } from "../../ProductsTableHeader/utils";
import ProductsListCompleteSet from "../ProductsListCompleteSet/ProductsListCompleteSet";
import ProductsListImage from "../ProductsListImage/ProductsListImage";
import ProductsListCharacteristics from "../ProductsListCharacteristics/ProductsListCharacteristics";
import ProductsListDescription from "../ProductsListDescription/ProductsListDescription";
import { updateProduct } from "../../../../../../store/actionCreator/products.actionCreator";

const ProductsTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMoveToArchive = () => {
    if (row.enabled) {
      dispatch(
        updateProduct({
          id: row._id,
          data: { enabled: false, name: row.name },
        }),
      );
      navigate(`?${query.toString()}`);
    } else {
      dispatch(
        updateProduct({ id: row._id, data: { enabled: true, name: row.name } }),
      );
      navigate(`?${query.toString()}`);
    }
  };
  const renderRow = (cell) => {
    if (Array.isArray(cell)) {
      return (
        <TableCell
          key={cell[0]}
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          <img
            src={cell[0]}
            alt={cell[0]}
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </TableCell>
      );
    }
    return (
      <TableCell
        key={cell}
        align="center"
        sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
      >
        {cell}
      </TableCell>
    );
  };

  return (
    <>
      <TableRow key={row.itemNo}>
        {headers.map((header) => renderRow(row[header.field]))}
        <TableCell
          sx={{ border: "1px solid rgba(224, 224, 224, 1)", width: "50px" }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              padding={1}
            >
              <Box width="100%">
                <Typography variant={"body1"} fontWeight={500}>
                  Sort Description:
                </Typography>
                <Typography variant={"body2"} paddingLeft={2}>
                  {Array.isArray(row.shortDescription)
                    ? row.shortDescription.join("/")
                    : row.shortDescription}
                </Typography>
              </Box>
              <ProductsListCompleteSet arr={row.completeSet} />
              <ProductsListImage arr={row.imageUrls} />
              <ProductsListCharacteristics obj={row.characteristics} />
              <ProductsListDescription arr={row.description} />
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                sx={{ width: "100%" }}
                gap={2}
              >
                <Button
                  onClick={handleMoveToArchive}
                  variant={"outlined"}
                  sx={{
                    border: "2px solid #0156FF",
                    borderRadius: "50px",
                    color: "#0156FF",
                    "&:hover": {
                      border: "2px solid #0156FF",
                      backgroundColor: "#0156FF",
                      color: "white",
                    },
                  }}
                >
                  {row.enabled ? "Move to archive" : "Move from archive"}
                </Button>
                <Button
                  onClick={() => navigate(`/admin/products/${row.itemNo}`)}
                  variant={"outlined"}
                  sx={{
                    border: "2px solid #0156FF",
                    borderRadius: "50px",
                    color: "#0156FF",
                    "&:hover": {
                      border: "2px solid #0156FF",
                      backgroundColor: "#0156FF",
                      color: "white",
                    },
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

ProductsTableRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.object.isRequired,
};
export default ProductsTableRow;

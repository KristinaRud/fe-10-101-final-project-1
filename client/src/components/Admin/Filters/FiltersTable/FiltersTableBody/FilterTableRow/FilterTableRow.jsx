import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import { deleteColor } from "../../../../../../store/actionCreator/colors.actionCreator";
import { deleteFilterData } from "../../../../../../store/actionCreator/filters.actionCreator";
import { formatString } from "../../../../../../utils/string/formatString";

const FilterTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteFilter = () => {
    if (row.type === "color") {
      dispatch(deleteColor(row._id));
    } else {
      dispatch(deleteFilterData(row._id));
    }
    setOpenDialog(false);
  };

  return (
    <>
      <TableRow>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          {formatString(row.type)}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            position: "relative",
          }}
        >
          {row.name}
          {row.cssValue && (
            <div
              style={{
                backgroundColor: row.cssValue,
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "13px",
              }}
            />
          )}
        </TableCell>
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              paddingBottom={1}
              justifyContent={"flex-end"}
            >
              <Box
                display={"flex"}
                gap={1}
                alignItems={"center"}
                flexWrap={"wrap"}
                mt={1}
              >
                <Button
                  onClick={() => navigate(`/admin/filters/${row._id}`)}
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
                <Button
                  onClick={() => setOpenDialog(true)}
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
                  Delete
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete filter {row.name}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Filter {row.name} will be deleted permanently. You can't undo this
            action. Are you sure you want to delete this filter?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Disagree</Button>
          <Button onClick={handleDeleteFilter} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
FilterTableRow.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cssValue: PropTypes.string,
  }).isRequired,
};
export default FilterTableRow;

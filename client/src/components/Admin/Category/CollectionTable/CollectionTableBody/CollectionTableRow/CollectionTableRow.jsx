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
  List,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../../../../store/actionCreator/catalog.actionCreator";

const excludedFields = ["id", "imgUrl", "name", "_id", "parentId", "__v"];
const CollectionTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fields = Object.keys(row).filter(
    (field) => !excludedFields.includes(field),
  );

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(row.id));
    setOpenDialog(false);
  };

  return (
    <>
      <TableRow key={row.id}>
        <TableCell
          component="th"
          scope="row"
          align="center"
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            backgroundImage: `url(${row.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          {row.name}
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
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              paddingBottom={1}
            >
              {fields.length > 0 && (
                <List sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Characteristics:
                  </Typography>
                  {fields.map((field) => (
                    <Typography
                      key={field}
                      variant="body2"
                      gutterBottom
                      component="div"
                    >
                      {field === "date"
                        ? `${field}: ${new Date(
                            row[field],
                          ).toLocaleDateString()}`
                        : `${field}: ${row[field]}`}
                    </Typography>
                  ))}
                </List>
              )}
              <Box
                display={"flex"}
                gap={1}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Button
                  onClick={() => navigate(`/admin/categories/${row.id}`)}
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
          Delete category {row.name}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Category {row.name} will be deleted permanently. You can't undo this
            action. Are you sure you want to delete this category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Disagree</Button>
          <Button onClick={handleDeleteCategory} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CollectionTableRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  row: PropTypes.object.isRequired,
};

export default CollectionTableRow;

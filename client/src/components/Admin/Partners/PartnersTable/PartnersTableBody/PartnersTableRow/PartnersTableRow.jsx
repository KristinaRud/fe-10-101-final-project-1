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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { deletePartners } from "../../../../../../store/actionCreator/partners.actionCreator";

const PartnersTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeletePartners = () => {
    dispatch(deletePartners(row.customId));
    setOpenDialog(false);
  };
  return (
    <>
      <TableRow>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          {row.customId}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          align="center"
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            backgroundImage: `url(${row.imageUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <TableCell
          align="center"
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            maxWidth: "100px",
          }}
        >
          {row.url}
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
                  onClick={() => navigate(`/admin/partners/${row.customId}`)}
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
          Delete partner {row.customId}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Partner {row.customId} will be deleted permanently. You can't undo
            this action. Are you sure you want to delete this partner?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Disagree</Button>
          <Button onClick={handleDeletePartners} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

PartnersTableRow.propTypes = {
  row: PropTypes.shape({
    customId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default PartnersTableRow;

import { TableCell, TableHead, TableRow } from "@mui/material";

const NewsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          Name
        </TableCell>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          Image
        </TableCell>
        <TableCell
          align="center"
          sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        />
      </TableRow>
    </TableHead>
  );
};

export default NewsTableHeader;

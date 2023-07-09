import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPartners } from "../../../../../store/selectors/partners.selector";
import PartnersTableRow from "./PartnersTableRow/PartnersTableRow";

const PartnersTableBody = () => {
  const partners = useSelector(selectPartners);

  return (
    <TableBody>
      {partners.length > 0 &&
        partners.map((row) => (
          <PartnersTableRow key={row.customId} row={row} />
        ))}
    </TableBody>
  );
};

export default PartnersTableBody;
